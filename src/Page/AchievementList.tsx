import styled from 'styled-components';
import { useGetAchievementListForGame, useGetAchievementListForGameWithUser } from '../Hooks/Controller';
import { Loader, LoaderWrapper } from '../Utils/Loader';

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;
    margin: 30px;
`;

const Image = styled.img`
    height: 70px;
    width: 70px;
`;

export default function AchievementList() {
    const { gameAchievementList, isLoading } = useGetAchievementListForGame(
        'http://127.0.0.1:5000/game-data/achievement-data/2250600/english',
    );

    const { userAchievementList, isLoadingUser } = useGetAchievementListForGameWithUser(
        'http://127.0.0.1:5000/game-data/user-achievement-list/2250600/76561198161762702',
    );

    return (
        <div>
            {isLoading || isLoadingUser ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardWrapper>
                    {gameAchievementList?.map((achievement, i) => (
                        <li key={i}>
                            <span>Name : {achievement.displayName}</span> <br />
                            {userAchievementList[i].achieved === 1 ? (
                                <Image src={achievement.icon} alt="unlocked achievement icon"></Image>
                            ) : (
                                <Image src={achievement.icongray} alt="locked achievement icon"></Image>
                            )}
                            <span> Description : {achievement.description}</span>
                        </li>
                    ))}
                </CardWrapper>
            )}
        </div>
    );
}
