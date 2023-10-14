export async function getUserProfile(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        return data.response.players
    } catch (error) {
        throw error;
    }
}