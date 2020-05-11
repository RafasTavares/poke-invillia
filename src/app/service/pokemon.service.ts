import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Pokemon } from '../model/pokemon.model';
import { Pokedex } from '../model/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllPokemons(offset): Observable<Pokedex> {

    let params = new HttpParams().set('offset', offset);

    return this.http.get<Pokedex>(this.rootUrl + 'pokemon', { params })
      .pipe(retry(1), catchError(this.handleError));
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    console.log('passou aqui');
    return this.http.get<Pokemon>(this.rootUrl + 'pokemon/' + name)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = (error.error instanceof ErrorEvent) ? error.error.message : `Error: ${error.status}\nMsg: ${error.message}`;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
