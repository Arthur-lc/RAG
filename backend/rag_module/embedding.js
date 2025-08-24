import { pipeline } from '@xenova/transformers';

const embedder = await pipeline(
      'feature-extraction', 
      'Xenova/all-MiniLM-L6-v2'
    );

async function generateEmbedding(text) {
    const embedding = await embedder(text, {
        pooling: 'mean',
        normalize: true
    });

    return embedding;
}

async function generateEmbeddings(chunks) {
    console.log(`Generating embeddings for ${chunks.length} chunks...`);

    const embeddings = [];


    const batchSize = 10;
    for (let i = 0; i < chunks.length; i += batchSize) {
        const batch = chunks.slice(i, i + batchSize);
        const batchTexts = batch.map(chunk => chunk.content);

        console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(chunks.length / batchSize)}`);

        const batchEmbeddings = await embedder(batchTexts, {
            pooling: 'mean',
            normalize: true
        });

        for (let j = 0; j < batch.length; j++) {
            embeddings.push({
                ...batch[j],
                vector: Array.from(batchEmbeddings.data.slice(j * 384, (j + 1) * 384))
            });
        }
    }

    return embeddings;
}

export { generateEmbeddings, generateEmbedding }