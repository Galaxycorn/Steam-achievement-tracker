import { useEffect, useState } from 'react';
import { getUserAchievement } from '../../Services/UserService';

export function useGetAchievementListForUser(gameId: string, userId: string) {
    const [userAchievementList, setUserAchievementList] = useState<any[]>([]);
    const [isLoadingUser, setLoadingUser] = useState(false);

    useEffect(() => {
        setLoadingUser(true);
        getUserAchievement(gameId, userId)
            .then((data) => {
                setUserAchievementList(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoadingUser(false);
            });
    }, [gameId]);

    return { userAchievementList, isLoadingUser };
}
