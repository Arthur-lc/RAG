import { useState } from 'react';

const QUERY_URL = import.meta.env.VITE_RAG_SERVER_URL

function useSendQuery() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendQuery = async (query) => {
        setLoading(true);
        setError(null);
        setData(null);

        const encodedQuery = encodeURIComponent(query)

        const url = `${QUERY_URL}/query?query=${encodedQuery}`

        try {
            const response = await fetch(url, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { sendQuery, loading, error, data };
}

function useSendRagQuery() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendQuery = async (question) => {
        setLoading(true);
        setError(null);
        setData(null);

        const url = `${QUERY_URL}/rag`

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: question }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { sendQuery, loading, error, data };
}

export { useSendQuery, useSendRagQuery };