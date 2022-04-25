import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { connect } from 'http2';
import { BooksService } from 'src/app/services/books.service';
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

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.title = 'Books Component';
    let connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl('https://localhost:5001/booksHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

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
      this.books = books;
      console.log(books);
    });
  }

  private processNotification(book: Book) {
    this.booksData = book;
  }
}
