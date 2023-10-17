import { useEffect, useState } from 'react';
import { getUserId, getUserProfile } from '../../Services/ProfileService';

export function useGetProfile() {
    const [userId, setProfileData] = useState<string>('');
    const [isLoadingUser, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserId()
            .then((data) => {
                setProfileData(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    return { userId, isLoadingUser };
}
