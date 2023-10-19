import React, { useEffect, useState } from 'react';
import { useGetAllGames } from '../../Hooks/API/useGetAllGames';
import { useGetGamesList } from '../../Hooks/API/useGetUserGames';
import { Loader, LoaderWrapper } from '../../Utils/Loader';

export function AchievementGameList() {
    const { gameList, isLoadingGames } = useGetAllGames();
    const { userGames, isLoadingUser } = useGetGamesList();

    //Creating a map for each appid and its name
    const appIdMapping: { [key: number]: string } = {};

    for (const game of gameList) {
        appIdMapping[game.appid] = game.name;
    }

    //Use map to iterate through userGames array and use gameName to look up the appid of userGames element
    const gameNamesArray = userGames.map((game) => {
        const gameName = appIdMapping[game.appid];
        if (gameName !== undefined) {
            return { ...game, name: gameName };
        } else {
            return { ...game, name: '' };
        }
    });

    return (
        <div>
            {isLoadingGames || isLoadingUser ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <div>
                    <h1>Games list for user :</h1>
                    {gameNamesArray.map((game, i) =>
                        game.name != '' ? (
                            <li key={game + i}>
                                <span>{game.name}</span>
                            </li>
                        ) : null,
                    )}
                </div>
            )}
        </div>
    );
}
