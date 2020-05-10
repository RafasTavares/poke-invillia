import { Abilities } from './abilities.model';
import { Types } from './types.model';

export class Pokemon {
    id: number = 0;
    height: number;
    weight: number;
    base_experience: number;
    abilities: Abilities[];
    results: string;
    name: string;
    types: Types;

    constructor() { }
}