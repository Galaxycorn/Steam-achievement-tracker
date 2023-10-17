export async function getUserAchievement(gameId: string, userId: string) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/game-data/user-achievement-list/${gameId}/${userId}`)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        return data.playerstats.achievements
    } catch (error) {
        throw error;
    }
}