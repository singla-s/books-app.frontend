import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[] = [];

  title = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'Book List Component';
  }
}
