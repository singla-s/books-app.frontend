import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';
import { SignalrService } from './signalr.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [BooksService, SignalrService],
})
export class SevicesModule {}
