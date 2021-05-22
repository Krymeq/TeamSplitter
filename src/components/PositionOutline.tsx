import { Player } from "../entities/player";

interface Props {
    player1: Player;
    player2: Player;
    position: string;
}

export const PositionOutline = ({
    player1,
    player2,
    position
}: Props) => {
    return <>
        <div style={{textAlign: "right"}}>{player1.nick}</div>
        <div style={{color:"#aad"}}>{position}</div>
        <div>{player2.nick}</div>
    </>
}