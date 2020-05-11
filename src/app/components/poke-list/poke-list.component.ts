import { Component, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service';
import { Pokedex } from 'src/app/model/pokedex.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})

export class PokeListComponent implements OnInit {

  @Output() pokedex: Pokedex;
  @Output() results = [new Pokemon()];
  index: number = 1;

  constructor(private pokeService: PokemonService) { }

  ngOnInit() {
    this.loadPokemons(this.index, 10);
  }

  loadPokemons(offset: number, size: number) {
    offset = (offset - 1) * size;

    return this.pokeService.getAllPokemons(offset).subscribe((data) => {
      this.pokedex = data;
      console.log(this.pokedex);
      this.pokedex.results.forEach((obj, index) => {
        this.pokeService.getPokemonByName(this.pokedex.results[index].name).subscribe(newData => {
          this.results[index] = newData;
        });
      });
    });
  }

  atualizarLista() {
    this.index = this.index + 1;
    this.loadPokemons(this.index, 10);
  }
}
