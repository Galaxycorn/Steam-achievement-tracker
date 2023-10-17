import { useEffect, useState } from 'react';
import { getUserProfile } from '../../Services/ProfileService';

export function useGetSteamProfile(userId: string) {
    const [profileData, setProfileData] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserProfile(userId)
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

    return { profileData, isLoading };
}
