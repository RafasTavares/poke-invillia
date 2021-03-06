import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeListComponent } from 'src/app/components/poke-list/poke-list.component';
import { PokemonService } from 'src/app/service/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PokeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [PokemonService],
})
export class PokemonModule { }
