import { useEffect, useState } from 'react';
import { getGameSummary } from '../../Services/GameService';

export function useGetGameSummary(gameId: string) {
    const [gameSummary, setGameSummary] = useState<any>([]);
    const [isLoadingGameSummary, setIsLoadingSummary] = useState<boolean>(false);
    useEffect(() => {
        setIsLoadingSummary(true);
        getGameSummary(gameId)
            .then((data) => {
                setGameSummary(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoadingSummary(false);
            });
    }, [gameId]);

    return { gameSummary, isLoadingGameSummary };
}
