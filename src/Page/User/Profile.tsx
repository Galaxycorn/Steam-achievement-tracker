import { useGetSteamProfile } from '../../Hooks/API/useGetSteamProfileData';
import { useGetProfile } from '../../Hooks/API/usetGetProfileId';
import { Loader } from '../../Utils/Loader';
import styled from 'styled-components';
import { useEffect } from 'react';

const NameText = styled.h1`
    font-size: 30px;
    text-align: center;
    padding-bottom: 30px;
`;

const Picture = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 75px;
`;

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default function UserData() {
    const { userId, isLoadingUser } = useGetProfile();
    const { profileData, isLoading } = useGetSteamProfile(userId);

    useEffect(() => {
        if (!isLoadingUser && profileData.length > 0) {
            localStorage.setItem('gameId', profileData[0].gameid);
            localStorage.setItem('userId', userId);
        }
    }, [isLoadingUser, isLoading, profileData, userId]);

    return (
        <div>
            <h1>User Profile Data</h1>
            {isLoading && isLoadingUser ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <ProfileWrapper>
                    {profileData.map((player: any) => (
                        <div key={player.steamid}>
                            <NameText>Name: {player.personaname}</NameText> <br />
                            <div>
                                Avatar: <Picture src={player.avatarfull} alt={player.personaname} />
                            </div>{' '}
                            <br />
                            <div>Jeu en cours: {player.gameextrainfo}</div> <br />
                            <div>Game id for dev purpose {player.gameid}</div> <br />
                            {/* Add more properties as needed */}
                        </div>
                    ))}
                </ProfileWrapper>
            )}
            ;
        </div>
    );
}
