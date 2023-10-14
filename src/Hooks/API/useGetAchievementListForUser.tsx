import { useEffect, useState } from 'react';
import { getUserAchievement } from '../../Services/UserService';

export function useGetAchievementListForUser(url: string) {
    const [userAchievementList, setUserAchievementList] = useState<any[]>([]);
    const [isLoadingUser, setLoadingUser] = useState(false);

    useEffect(() => {
        setLoadingUser(true);
        getUserAchievement(url)
            .then((data) => {
                setUserAchievementList(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoadingUser(false);
            });
    }, [url]);

    return { userAchievementList, isLoadingUser };
}
