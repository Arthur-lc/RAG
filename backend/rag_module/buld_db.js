import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';
import MarkdownIt from 'markdown-it';

import { VecDB } from './database.js';
import { generateEmbeddings } from './embedding.js';

const md = new MarkdownIt();
const vec_db = new VecDB();
await vec_db.initialize();

function chunkMarkdown(content, maxTokens = 500) {
    const chunks = [];

    const tokens = md.parse(content, {});

    let currentChunk = '';
    let currentSection = '';
    let chunkIndex = 0;

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (token.type === 'heading_open') {
            const headerToken = tokens[i + 1];
            if (headerToken && headerToken.type === 'inline') {
                currentSection = headerToken.content;
            }
        }

        const tokenContent = getTokenContent(tokens, i);

        const estimatedTokens = (currentChunk + tokenContent).length / 4;

        if (estimatedTokens > maxTokens && currentChunk.length > 0) {
            chunks.push({
                id: uuidv4(),
                index: chunkIndex++,
                content: currentChunk.trim(),
                section: currentSection,
                tokens: Math.floor(currentChunk.length / 4)
            });

            const sentences = currentChunk.split(/[.!?]+/);
            const lastSentence = sentences[sentences.length - 2] || '';
            currentChunk = lastSentence + tokenContent;
        } else {
            currentChunk += tokenContent;
        }
    }

    // Add final chunk
    if (currentChunk.trim()) {
        chunks.push({
            id: uuidv4(),
            index: chunkIndex,
            content: currentChunk.trim(),
            section: currentSection,
            tokens: Math.floor(currentChunk.length / 4)
        });
    }

    return chunks;
}

function getTokenContent(tokens, index) {
    const token = tokens[index];

    if (token.type === 'inline') {
        return token.content;
    } else if (token.type === 'heading_open') {
        // Get the heading content
        const level = token.tag;
        const nextToken = tokens[index + 1];
        if (nextToken && nextToken.type === 'inline') {
            return `\n${'#'.repeat(parseInt(level.charAt(1)))} ${nextToken.content}\n`;
        }
    } else if (token.type === 'paragraph_open') {
        return '\n';
    } else if (token.type === 'paragraph_close') {
        return '\n\n';
    } else if (token.content) {
        return token.content;
    }

    return '';
}

async function processMarkdownFile(filePath) {
    try {
        console.log(`Processing file: ${filePath}`);

        // Read markdown file
        const content = await fs.readFile(filePath, 'utf-8');
        const filename = path.basename(filePath);

        // Chunk the content
        console.log('Chunking markdown content...');
        const chunks = chunkMarkdown(content);
        console.log(`Created ${chunks.length} chunks`);

        // Generate embeddings
        const embeddings = await generateEmbeddings(chunks);

        // Store in database
        await vec_db.storeEmbeddings(filename, embeddings);

        console.log('✅ Processing complete!');

        return {
            filename,
            chunks: chunks.length,
            totalTokens: chunks.reduce((sum, chunk) => sum + chunk.tokens, 0)
        };

    } catch (error) {
        console.error('Error processing markdown file:', error);
        throw error;
    }
}

async function preoceesFiles(folderPath) {
    const files = await fs.readdir(folderPath);
    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(folderPath, file);
            await processMarkdownFile(filePath);
        }
    }
}

preoceesFiles('./docs');