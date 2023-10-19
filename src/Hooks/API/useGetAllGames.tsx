import { useEffect, useState } from 'react';
import { getAllGames } from '../../Services/FetchAllGames';

export function useGetAllGames() {
    const [gameList, setGameList] = useState<any[]>([]);
    useEffect(() => {
        getAllGames()
            .then((data) => {
                setGameList(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {});
    }, []);

    return { gameList };
}
