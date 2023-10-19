export async function getGameAchievementList(gameId: string) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/game-data/achievement-data/${gameId}/english`)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        return data.game.availableGameStats.achievements
    } catch (error) {
        throw error;
    }
}

export async function getGameSummary(gameId: string) {
    try {
        const response = await fetch(`http://localhost:5000/game-data/summary/${gameId}`)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        console.log(data)

        if (data[gameId] && data[gameId].data) {
            return data[gameId].data;
        }


    } catch (error) {
        throw error;
    }
}