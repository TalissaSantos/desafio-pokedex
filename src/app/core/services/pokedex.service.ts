import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}
  getListAllPokemons(): Observable<Card> {
    return this.httpClient.get<Card>(this.baseUrl).pipe(
      tap((res) => {
        res.results.map((resPokemons: Card) => {
          this.getPokemon(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      })
    );
  }

  getPokemon(url: string): Observable<Card> {
    return this.httpClient.get<Card>(url);
  }
}
