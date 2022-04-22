import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  title = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'Books Component';
  }
}
