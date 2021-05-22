import { Player } from "../entities/player";
import React, { useState } from "react";
import styled from "styled-components"
import { PlayerTab } from "./PlayerTab";
import { Button } from "./Button";
import { Team } from "../entities/team";
import { ResultTab } from "./ResultTab";
import { splitPlayers } from "../utils/split-teams";

const Root = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const PlayerLayout = styled.div`
    padding: 0.7em;
`

const ButtonPane = styled.div`
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
`

const ResultLayout = styled.div`
    padding: 0.7em;
`

export const Main = () => {
    const handleChange = (players: Player[], playerId: number, newName: string) => {
        const copiedPlayers = [...players];
        const player = copiedPlayers[playerId];
        player.nick = newName;
        copiedPlayers[playerId] = player;
        setPlayers(copiedPlayers);
    }

    const assignPlayers = () => {
        for(const player of players) {
            if (player.nick.length === 0) {
                setErrorState(true);
                return;
            }
        }

        setLoadingState(true);
        setResult(splitPlayers(players));
        setLoadingState(false);
    }

    // initial state; creates 10 players with empty nicks
    const [players, setPlayers] = useState<Player[]>(
        Array.from({ length: 10 },
            (_, idx) => {
                return { id: idx, nick: "" }
            }
        ));

    const [result, setResult] = useState<{
        team1: Team,
        team2: Team
    } | undefined>(undefined);

    const [isLoading, setLoadingState] = useState<boolean>(false);
    const [error, setErrorState] = useState<boolean>(false);

    return (
        <Root>
            <PlayerLayout>
                {players.map(player =>
                    <PlayerTab
                        key={player.id}
                        player={player}
                        error={error}
                        onChange={e =>
                            handleChange(players, player.id, e.target.value)}
                    />)
                }
                <ButtonPane>
                    <Button onClick={assignPlayers} text="Podziel" />
                    <Button onClick={() => setResult(undefined)} text="Wyczyść" />
                </ButtonPane>
            </PlayerLayout>
            { isLoading
                ? <span style={{color: "white"}}>Tworzenie drużyn...</span>
                : result && <ResultLayout>
                    <ResultTab teams={result}/>
                </ResultLayout>
            }
        </Root>
    );
}