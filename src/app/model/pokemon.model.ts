import { Abilities } from './abilities.model';
import { Types } from './types.model';

export class Pokemon {
    id: number = null;
    height: number = null;
    weight: number = null;
    base_experience: number = null;
    abilities: Abilities[] = [];
    results: string = null;
    name: string = null;
    types: Types = null;

    constructor() { }
}