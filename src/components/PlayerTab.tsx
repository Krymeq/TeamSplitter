import React from "react";
import styled from "styled-components";
import { Player } from "../entities/player";
import { Input } from "./Input";

const Root = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 6px;
`

const Span = styled.span`
    display: inline-block;
    min-width: 2em;
`

interface Props {
    player: Player;
    error: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PlayerTab = ({ player, error, onChange }: Props) => {
    return (
        <Root>
            <Span>{player.id + 1}</Span>
            <Input
                text={player.nick}
                onChange={onChange}
                hint="Podaj nick"
                error={error}
            />
        </Root>
    );
}