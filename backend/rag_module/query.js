import { VecDB } from "./database.js";
import { generateEmbedding } from "./embedding.js";

const vec_db = new VecDB();
await vec_db.initialize();

export default async function queryFor(queryText) {
    const queryEmbedding = await generateEmbedding(queryText)
    console.log("Quering for: " + queryText + [queryEmbedding]);

    return vec_db.search(queryEmbedding, 5);
}