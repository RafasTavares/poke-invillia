import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Pokedex } from 'src/app/model/pokedex.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})

export class PokeListComponent implements OnInit {

  pokedex: Pokedex;
  results: Pokemon[] = [new Pokemon];

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons(1, 20);
  }

  loadPokemons(offset: number, size: number) {
    offset = (offset - 1) * size;

    return this.pokeService.getAllPokemons(offset).subscribe((data) => {
      this.pokedex = data;

      this.pokedex.results.forEach((obj, index) => {

        this.pokeService.getPokemonByName(this.pokedex.results[index].name).subscribe(newData => {
          this.results[index] = newData;
        });
      });
    });
  }

}
