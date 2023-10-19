export async function getAllGames() {
    try {
        const response = await fetch('http://localhost:5000/game-data/list')
        if (!response.ok) {
            throw Error("Error during fetch")
        }
        const data = await response.json()
        return data.applist.apps;
    }
    catch (error) {
        throw error;
    }
}