import React from 'react';
import { Wrapper } from '../Utils/Styles/Wrapper';

interface GameSummary {
    name: string;
    header_image: string;
}

interface GameDetailsProps {
    gameSummary: GameSummary;
}

export default function GameSummary({ gameSummary }: GameDetailsProps) {
    console.log(gameSummary);
    return (
        <Wrapper>
            <h1>{gameSummary.name}</h1>
            <img src={gameSummary.header_image} alt="Game background" />
        </Wrapper>
    );
}
