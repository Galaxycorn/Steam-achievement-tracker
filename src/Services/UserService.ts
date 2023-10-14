export async function getUserAchievement(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        return data.playerstats.achievements
    } catch (error) {
        throw error;
    }
}