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
    const searchForErrors = (): boolean => {
        let errorsFound = false;
        for (const player of players) {
            if (player.nick.length === 0) {
                errorsFound = true;
                player.error = "Nazwa nie może być pusta";
            } else if (players.filter(e => e.nick === player.nick).length > 1) {
                errorsFound = true;
                player.error = "Nazwa nie jest unikalna!"
            } else {
                player.error = undefined;
            }
        }
        return errorsFound;
    }

    const handleChange = (players: Player[], playerId: number, newName: string) => {
        if (newName.length > 17) return;
        const copiedPlayers = [...players];
        const player = copiedPlayers[playerId];
        
        player.nick = newName;
        copiedPlayers[playerId] = player;
        setPlayers(copiedPlayers);
        
        if (submitted) {
            searchForErrors();
        }
    }

    const assignPlayers = () => {
        if (!searchForErrors()) {
            setLoadingState(true);
            setResult(splitPlayers(players));
            setLoadingState(false);
        } else {
            if (!submitted) {
                setSubmitStatus(true);
            }
        }
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
    const [submitted, setSubmitStatus] = useState<boolean>(false);

    return (
        <Root>
            <PlayerLayout>
                {players.map(player =>
                    <PlayerTab
                        key={player.id}
                        player={player}
                        error={player.error}
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
                ? <span style={{ color: "white" }}>Tworzenie drużyn...</span>
                : result && <ResultLayout>
                    <ResultTab teams={result} />
                </ResultLayout>
            }
        </Root>
    );
}