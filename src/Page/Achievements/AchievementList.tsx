import styled from 'styled-components';
import React from 'react';

import { Loader, LoaderWrapper } from '../../Utils/Loader';
import { useGetAchievementListForGame } from '../../Hooks/API/useGetAchievementList';
import { useGetAchievementListForUser } from '../../Hooks/API/useGetAchievementListForUser';

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
    let gameId = localStorage.getItem('gameId');
    let userId = localStorage.getItem('userId');
    let gameAchievementList = [];
    let userAchievementList: { achieved: number }[] = [];
    let isLoading = false;
    let isLoadingUser = false;

    if (gameId && gameId.length !== 0 && userId && userId.length !== 0) {
        ({ gameAchievementList, isLoading } = useGetAchievementListForGame(gameId));

        ({ userAchievementList, isLoadingUser } = useGetAchievementListForUser(gameId, userId));
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
