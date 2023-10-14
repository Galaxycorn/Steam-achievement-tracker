import styled from 'styled-components';
import React from 'react';

import { Loader, LoaderWrapper } from '../Utils/Loader';
import { useGetAchievementListForGame } from '../Hooks/API/useGetAchievementList';
import { useGetAchievementListForUser } from '../Hooks/API/useGetAchievementListForUser';

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
    const gameId = localStorage.getItem('gameId');
    let gameAchievementList = [];
    let userAchievementList: { achieved: number }[] = [];
    let isLoading = false;
    let isLoadingUser = false;

    if (gameId === undefined || gameId === null) {
        ({ gameAchievementList, isLoading } = useGetAchievementListForGame(
            `http://127.0.0.1:5000/game-data/achievement-data/${gameId}/english`,
        ));

        ({ userAchievementList, isLoadingUser } = useGetAchievementListForUser(
            `http://127.0.0.1:5000/game-data/user-achievement-list/${gameId}/76561198070907322`,
        ));
    } else {
        return <div>No game launched at the moment</div>;
    }

    return (
        <div>
            {isLoading || isLoadingUser ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardWrapper>
                    {gameAchievementList?.map((achievement, i) => (
                        <li key={achievement + i}>
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
