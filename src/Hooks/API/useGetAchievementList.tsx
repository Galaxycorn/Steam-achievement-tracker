import { useEffect, useState } from 'react';
import { getGameAchievementList } from '../../Services/GameService';

export function useGetAchievementListForGame(gameId: string) {
    const [gameAchievementList, setGameAchievementList] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGameAchievementList(gameId)
            .then((data) => {
                setGameAchievementList(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [gameId]);

    return { gameAchievementList, isLoading };
}
