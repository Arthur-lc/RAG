import 'dotenv/config';
import express from 'express';
import queryFor from '../rag_module/query.js';
import cors from 'cors';
import { askGemini, buildContext } from '../rag_module/llm.js';

const app = express();

app.use(cors())
const port = 3000;

const sessions = [];

app.use(express.json());

const requireSession = (req, res, next) => {
  let sessionId = req.headers['session-id'];
    if (!sessionId) {
        return res.status(401).json({ error: 'Missing session-id header' });
    }

    req.sessionId = sessionId;

    console.log("next -> sessionId: ", sessionId);
    
    next();
};

app.post('/query', async (req, res) => {
    const { query } = req.body;
    
    if (!query) {
        return res.status(400).json({ error: "Query parameter is required." });
    }    
    
    const results = await queryFor(query);

    res.json({
        results: results,
    });
});

// will retrive chunks and generate a response for a question using a llm
app.post('/rag', requireSession, async (req, res) => {   
    const { question } = req.body;

    console.log("Received on /rag: question");
    
    
    if (!question) {
        return res.status(400).json({ error: "Both 'query' and 'question' parameters are required." });
    }    
    
    const results = await queryFor(question);
    
    console.log(req.sessionId);
    
    const history = sessions[req.sessionId].map(m => `${m.role}: ${m.content}`).join("\n");
    const context = buildContext(results);
    const prompt = `You are an expert AI assistant. Your task is to answer the user's question based exclusively on the provided context and conversation history.\n\nDo not use any external knowledge. Your answer must be grounded in the information given below.\n\nIf the context does not contain the information needed to answer the question, state clearly that you cannot answer with the provided information.\n\n<history>${history}\n\n<context>\n${context}\n</context>\n\n<question>\n${question}\n</question>\n\nAnswer:`
    const answer = await askGemini(prompt);
    
    sessions[req.sessionId].push({ role: "user", content: question });
    sessions[req.sessionId].push({ role: "assistant", content: answer });

    res.json({
        answer: answer,
        results: results,
    });
});


// == Session Token ========================================
// ---------------------------------------------------------
// Depois essa funcionalidade tem que substituida pelo sistema de login e auth

app.post('/newSession', async (req, res) => {
    const sessionId = sessions.length;
    console.log("New Session: ", sessionId);
    sessions[sessionId] = [];
    
    res.json({ sessionId });
});

// ---------------------------------------------------------
// =========================================================

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default app;