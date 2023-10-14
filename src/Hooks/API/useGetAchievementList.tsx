import { useEffect, useState } from 'react';
import { getGameAchievementList } from '../../Services/GameService';

export function useGetAchievementListForGame(url: string) {
    const [gameAchievementList, setGameAchievementList] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGameAchievementList(url)
            .then((data) => {
                setGameAchievementList(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { gameAchievementList, isLoading };
}
