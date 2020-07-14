import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList : Book[];

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<Book[]> {
    return this.httpClient.get<Book[]>(apiUrl + '/books' );
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(apiUrl + '/books', book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(apiUrl + "/books/" + id, book);
  }

  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(apiUrl + "/books/" + id);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete(apiUrl + "/books/" + id);
  }

}
