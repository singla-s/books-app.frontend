import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  constructor() {}

  public signalRConnect(): void {
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
  }
}
