import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {

  id: number;
  isReceivedMessage = false;
  message: string;
  buttonMessage = "Add new book";
  isAddingBook = true;

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl('')
  })

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params.id) {
          this.buttonMessage = "Edit book";
          this.isAddingBook = false;
          this.id = params.id;
        }
        this.bookService.getById(this.id).subscribe(
          result => {
            this.bookForm.setValue(result);
          }
        );
      }
    )
  }

  editBook() {
    if (this.id) {
      this.bookService.updateBook(this.id, this.bookForm.value).subscribe(
        result => {
          this.isReceivedMessage = true;
          this.message = "Edit Book successfully";
        }
      );
    } else {
      this.bookService.createBook(this.bookForm.value).subscribe(
        result => {
          this.isReceivedMessage = true;
          this.message = "Add Book successfully";
        }
      );
    }
  }

  deleteBook() {
    if (confirm("Do you want to delete this book?")) {
      this.bookService.deleteById(this.id).subscribe(
        () => {
          this.isReceivedMessage = true;
          this.message = "Delete Book successfully";
        }
      )
    }
  }
}




