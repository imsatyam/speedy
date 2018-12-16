import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Payload } from './model/payload';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const serviceUrl = "http://localhost:4201";
const apiUrl = {
  jwtDecoder: "/api/v1/jwt/decode"
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console.
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  doJWTDecode(payload: Payload): Observable<Payload> {
    return this.http.post<Payload>(serviceUrl + apiUrl.jwtDecoder, payload, httpOptions)
    .pipe(
      catchError(this.handleError('doJWTDecode', payload))
    );
  }

}
