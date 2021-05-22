import styled from "styled-components";
import { Team } from "../entities/team";
import { PositionOutline } from "./PositionOutline";

const Root = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 3fr;
    grid-template-rows: repeat(6, 1fr);
    column-gap: 15px;
    row-gap: 5px;
    color: #ddd;
`

const Span = styled.span`
    color: #669;
`

interface Props {
    teams: { team1: Team, team2: Team };
}

export const ResultTab = ({teams}: Props) => {
    const {team1, team2} = teams;
    return (
        <Root>
            <Span style={{textAlign: "right"}}>Team 1</Span><Span></Span><Span>Team 2</Span>
            <PositionOutline position="Top" player1={team1.top} player2={team2.top}/>
            <PositionOutline position="Jungle" player1={team1.jungle} player2={team2.jungle}/>
            <PositionOutline position="Mid" player1={team1.mid} player2={team2.mid}/>
            <PositionOutline position="ADC" player1={team1.adc} player2={team2.adc}/>
            <PositionOutline position="Supp" player1={team1.support} player2={team2.support}/>
        </Root>
    );
}