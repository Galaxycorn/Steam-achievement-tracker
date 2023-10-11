import { useEffect, useState } from 'react';

export function useGetProfile(url: string) {
    const [profileData, setProfileData] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchProfileData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProfileData(data.response.players);
                console.log(data.response.players);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProfileData();
    }, [url]);

    return { profileData, isLoading };
}

export function useGetAchievementListForGame(url: string) {
    const [gameAchievementList, setGameAchievementList] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchGameAchievementList() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                // console.log(data);
                setGameAchievementList(data.game.availableGameStats.achievements);
                console.log('DATA ACHIEV FOR GAME', data.game.availableGameStats.achievements);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchGameAchievementList();
    }, [url]);

    return { gameAchievementList, isLoading };
}

export function useGetAchievementListForGameWithUser(url: string) {
    const [userAchievementList, setUserAchievementList] = useState<any[]>([]);
    const [isLoadingUser, setLoadingUser] = useState(false);

    useEffect(() => {
        setLoadingUser(true);
        async function fetchUserAchievementList() {
            try {
                const response = await fetch(url);
                const data = await response.json();

                setUserAchievementList(data.playerstats.achievements);
                console.log('DATA ACHIV FOR USER GAME', data.playerstats.achievements);
            } catch (err) {
                console.log(err);
            } finally {
                setLoadingUser(false);
            }
        }
        fetchUserAchievementList();
    }, [url]);

    return { userAchievementList, isLoadingUser };
}
