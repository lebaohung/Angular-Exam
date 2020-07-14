import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  bookList : Book[];

  ngOnInit(): void {
    this.bookService.getAll().subscribe(
      (result) => {
        this.bookList = result;
      }, error => {
        alert("Cannot get data!");
      }
    );
  }

}
