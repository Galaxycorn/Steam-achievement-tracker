import { useEffect, useState } from 'react';
import { getAllGames } from '../../Services/FetchAllGames';

export function useGetAllGames() {
    const [gameList, setGameList] = useState<any[]>([]);
    const [isLoadingGames, setIsLoadingGames] = useState<boolean>(false);
    useEffect(() => {
        setIsLoadingGames(true);
        getAllGames()
            .then((data) => {
                setGameList(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoadingGames(false);
            });
    }, []);

    return { gameList, isLoadingGames };
}
