import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ParsedString } from './parsed-string.model';

@Injectable({
  providedIn: 'root'
})
export class NameParserService {
  private apiUrl = 'https://localhost:7125/api/StringParcer/parse'; // Temperory I am using localhost URL

  constructor(private http: HttpClient) {}

  parseName(fullName: string): Observable<ParsedString> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ParsedString>(this.apiUrl, { fullName }, { headers }).pipe(
      map(response => response as ParsedString), // Explicitly cast the response to ParsedString
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message);
  }
}
