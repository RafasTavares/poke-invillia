import { Pokemon } from './pokemon.model';

export class Pokedex {
    name: string;
    next: string;
    previous: string;
    results: Pokemon[];
}