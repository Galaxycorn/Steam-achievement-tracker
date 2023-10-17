export async function postProfileUpdate(apiKey: string, userId: string) {
    try {
        const response = await fetch("http://127.0.0.1:5000/game-data/apiKey", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ apiKey: apiKey, userId: userId }),
        })
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        throw error;
    }
}