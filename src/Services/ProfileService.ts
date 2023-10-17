export async function getUserProfile(userId: string) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/profile-data/${userId}`)
        if (!response.ok) {
            throw new Error("Error during fetch")
        }
        const data = await response.json();
        return data.response.players
    } catch (error) {
        throw error;
    }
}

export async function getUserId() {
    try {
        const response = await fetch('http://127.0.0.1:5000/profile')
        if (!response.ok) {
            throw new Error('Error during fetch')
        }
        const data = await response.json();
        return data
    } catch (error) {
        throw error;
    }
}