import 'dotenv/config';
import express from 'express';
import queryFor from '../rag_module/query.js';
import cors from 'cors';
import { askGemini, buildContext } from '../rag_module/llm.js';

const app = express();

app.use(cors())
const port = 3000;

app.use(express.json());

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
app.post('/rag', async (req, res) => {   
    const { question } = req.body;

    console.log("Received on /rag: question");
    
    
    if (!question) {
        return res.status(400).json({ error: "Both 'query' and 'question' parameters are required." });
    }    
    
    const results = await queryFor(question);

    const context = buildContext(results);
    const prompt = `You are an expert AI assistant. Your task is to answer the user's question based exclusively on the provided context.\n\nDo not use any external knowledge. Your answer must be grounded in the information given below.\n\nIf the context does not contain the information needed to answer the question, state clearly that you cannot answer with the provided information.\n\n<context>\n${context}\n</context>\n\n<question>\n${question}\n</question>\n\nAnswer:`
    const answer = await askGemini(prompt);

    res.json({
        answer: answer,
        results: results,
    });
});

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