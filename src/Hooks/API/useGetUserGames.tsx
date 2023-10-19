import { useEffect, useState } from 'react';
import { getUserGames } from '../../Services/UserService';

export function useGetGamesList() {
    const [userGames, setUserGames] = useState<any[]>([]);
    const [isLoadingUser, setLoadingUser] = useState(false);

    useEffect(() => {
        setLoadingUser(true);
        getUserGames()
            .then((data) => {
                setUserGames(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoadingUser(false);
            });
    }, []);

    return { userGames, isLoadingUser };
}
