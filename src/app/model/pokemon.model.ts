import { Abilities } from './abilities.model';

export class Pokemon {
    id: number;
    height: number;
    weight: number;
    abilities: Abilities[];
    results: string;
    name: string;
}