import { Player } from "./player";

export interface Team {
    top: Player;
    jungle: Player;
    mid: Player;
    adc: Player;
    support: Player;
}