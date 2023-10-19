import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetGameSummary } from '../../Hooks/API/useGetGameSummary';
import { Loader, LoaderWrapper } from '../../Utils/Loader';
import GameSummary from '../../Components/Game';

export function Game() {
    const { id } = useParams<any>();

    if (id === undefined) {
        return <div>No game ID provided</div>;
    }

    const { gameSummary, isLoadingGameSummary } = useGetGameSummary(id);

    // console.log(typeof gameSummary);
    // console.log(gameSummary.name);

    return (
        <div>
            {isLoadingGameSummary ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <GameSummary gameSummary={gameSummary} />
            )}
        </div>
    );
}
