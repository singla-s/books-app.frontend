import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BooksService } from 'src/app/services/books.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { Book } from './../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  title = '';
  books: Book[] = [];

  booksData: any;

  constructor(
    private booksService: BooksService,
    private signalRService: SignalrService
  ) {}

  ngOnInit(): void {
    this.title = 'Books Component';
    let connection = this.signalRService.getSignalRConnection();

    connection
      .start()
      .then(() => {
        console.log('signalR connected!');
        connection
          .invoke('subscribeToNewBookRelease', 'testuser', 'newBook')
          .catch((err) => {
            return console.error(err.toString());
          });
      })
      .catch((err) => {
        return console.error(err.toString());
      });

    connection.on('NewBookNotification', (bookObj) => {
      this.processNotification(bookObj);
    });
    this.booksService.getAllBooks().subscribe((books) => {
      this.books = [...this.books, ...books];
      console.log(books);
    });
  }

  private processNotification(book: Book) {
    setTimeout(() => this.books.push(book), 2000);
  }
}
