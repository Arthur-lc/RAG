import { useState } from 'react';

const SERVER_URL = import.meta.env.VITE_RAG_SERVER_URL

let sessionId = undefined;

async function requestSessionId() {
    const url = `${SERVER_URL}/newSession`

    const response = await fetch(url, {
        method: 'POST',
    });

    if (!response.ok) {
        throw new Error("Error while creating new session");
    }

    const data = await response.json();
    const sessionId = data.sessionId
    console.log("1: ", sessionId);
    

    return sessionId;
}

function useSendQuery() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const sendQuery = async (query) => {
        setLoading(true);
        setError(null);
        setData(null);

        const encodedQuery = encodeURIComponent(query)

        const url = `${SERVER_URL}/query?query=${encodedQuery}`

        try {
            const response = await fetch(url, {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response}`);
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

        if (sessionId === undefined) {
            sessionId = await requestSessionId();
        }

        const url = `${SERVER_URL}/rag`

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'session-Id': sessionId
                },
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