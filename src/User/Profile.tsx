import { useGetProfile } from '../Hooks/API/useGetProfile';
import { Loader } from '../Utils/Loader';
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
    const { profileData, isLoading } = useGetProfile('http://127.0.0.1:5000/profile-data/76561198070907322');

    useEffect(() => {
        if (!isLoading && profileData.length > 0) {
            // Assuming you want to set the gameid of the first player in the list
            localStorage.setItem('gameId', profileData[0].gameid);
            localStorage.setItem('userId', profileData[0].steamid);
        }
    }, [isLoading, profileData]);

    return (
        <div>
            <h1>User Profile Data</h1>
            {isLoading ? (
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
