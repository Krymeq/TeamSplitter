import { Player } from "../entities/player";
import { Team } from "../entities/team";

export const splitPlayers = (players: Player[]): {team1: Team, team2: Team} => {
    if (players.length < 10) throw new Error('Not enough players!');
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    
    return {
        team1: {
            top: shuffled[0],
            jungle: shuffled[1],
            mid: shuffled[2],
            adc: shuffled[3],
            support: shuffled[4]
        },
        team2: {
            top: shuffled[5],
            jungle: shuffled[6],
            mid: shuffled[7],
            adc: shuffled[8],
            support: shuffled[9]
        }
    };
}