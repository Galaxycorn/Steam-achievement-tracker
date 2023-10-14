import { useEffect, useState } from 'react';
import { getUserProfile } from '../../Services/ProfileService';

export function useGetProfile(url: string) {
    const [profileData, setProfileData] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserProfile(url)
            .then((data) => {
                setProfileData(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { profileData, isLoading };
}
