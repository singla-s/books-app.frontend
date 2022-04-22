import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../books/interfaces/book.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksUri = 'https://localhost:5001/api/Books';

  constructor(private https: HttpClient) {}

  public getAllBooks(): Observable<Book[]> {
    return this.https.get<Book[]>(this.booksUri).pipe(catchError(() => of([])));
  }
}
