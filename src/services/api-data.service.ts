import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsDataType } from '../app/Types/apiData.model';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private httpClient: HttpClient) {}

  comments?: CommentsDataType[];

  loadUserComments() {
    return this.fetchComments(
      'https://jsonplaceholder.typicode.com/comments',
      'Failed to fetch comments'
    );
  }

  private fetchComments(url: string, errorMessage: string) {
    return this.httpClient
      .get(url, {
        observe: 'response',
      })
      .pipe(
        map((val) => val.body),
        catchError((error) => throwError(() => new Error(errorMessage)))
      );
  }
}
