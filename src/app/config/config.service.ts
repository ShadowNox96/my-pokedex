import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APPCONFIG } from './constants.module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  /**
   * Get all pokemons whit a 10 limit
   * @param offset number of the next list of pokemons
   * @returns pokemons object
   */
  getPokemons(offset: number): Observable<Object> {
    return this.http.get(`${APPCONFIG.BASE_URL}/?offset=${offset}&limit=10`, httpOptions).pipe(
      catchError(this.handleError('findList', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


