import lancedb from '@lancedb/lancedb';

const TABLE_NAME = "chunks";

export class VecDB {
    constructor() {
        this.db = null;
        this.table = null;
    }

    async initialize() {
        this.db = await lancedb.connect('./vector_db');
    }

    async storeEmbeddings(filename, embeddings) {
        console.log('Storing embeddings in vector database...');

        // Prepare data for LanceDB
        const records = embeddings.map(item => ({
            id: item.id,
            source_file: filename,
            chunk_index: item.index,
            content: item.content,
            section: item.section || '',
            token_count: item.tokens,
            vector: item.vector,
            created_at: new Date().toISOString()
        }));
        try {
            // Check if table exists
            const tableNames = await this.db.tableNames();

            if (!tableNames.includes(TABLE_NAME)) {
                // Create new table with schema
                this.table = await this.db.createTable(TABLE_NAME, records);
                console.log(`Created new table: ${TABLE_NAME}`);
            } else {
                // Open existing table and add records
                this.table = await this.db.openTable(TABLE_NAME);
                await this.table.add(records);
                console.log(`Added records to existing table: ${TABLE_NAME}`);
            }

            console.log(`Successfully stored ${records.length} chunks in database`);

        } catch (error) {
            console.error('Error storing embeddings:', error);
            throw error;
        }
    }

    async search(queryEmbedding, limit = 5) {
        try {
            if (!this.table) {
                const tableNames = await this.db.tableNames();
                if (tableNames.includes(TABLE_NAME)) {
                    this.table = await this.db.openTable(TABLE_NAME);
                } else {
                    throw new Error('No data found. Process a markdown file first.');
                }
            }
        
            // Use the correct LanceDB search API
            const results = await this.table
                .vectorSearch(Array.from(queryEmbedding.data))
                .limit(limit)
                .toArray();

            return results.map(result => ({
                content: result.content,
                section: result.section || '',
                source_file: result.source_file,
                similarity: result._distance || 'N/A'
            }));

        } catch (error) {
            console.error('Search error:', error);
            throw error;
        }
    }
}