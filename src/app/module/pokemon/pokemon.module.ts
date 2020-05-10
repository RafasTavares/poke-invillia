import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailComponent } from 'src/app/components/poke-detail/poke-detail/poke-detail.component';
import { PokeListComponent } from 'src/app/components/poke-list/poke-list.component';
import { PokemonService } from 'src/app/service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PokeListComponent,
    PokeDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PokemonService],
})
export class PokemonModule { }
