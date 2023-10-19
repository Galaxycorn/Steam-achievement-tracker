import React, { useEffect, useState } from 'react';
import { useGetAllGames } from '../../Hooks/API/useGetAllGames';
import { useGetGamesList } from '../../Hooks/API/useGetUserGames';

export function AchievementGameList() {
    const { gameList } = useGetAllGames();
    const { userGames } = useGetGamesList();

    //TODO Fix this -> Data is fine but need to create a loading

    //Creating a map for each appid and its name
    const appIdMapping: { [key: number]: string } = {};

    for (const game of gameList) {
        appIdMapping[game.appid] = game.name;
    }

    console.log(appIdMapping);

    //Use map to iterate through userGames array and use gameName to look up the appid of userGames element
    const gameNamesArray = userGames.map((game) => {
        const gameName = appIdMapping[game.appid];
        return { ...game, name: gameName };
    });

    console.log(gameNamesArray);

    return (
        <div>
            <h1>Games list for user :</h1>
            {userGames.map((game, i) => (
                <li key={game + i}>
                    <span>{game.name}</span>
                </li>
            ))}
        </div>
    );
}
