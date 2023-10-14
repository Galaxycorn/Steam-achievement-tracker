export async function getGameAchievementList(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        console.log(data)
        return data.game.availableGameStats.achievements
    } catch (error) {
        throw error;
    }
}