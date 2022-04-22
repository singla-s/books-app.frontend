import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { SevicesModule } from '../services/sevices.module';
import { BooksListComponent } from './books/books-list/books-list.component';

@NgModule({
  declarations: [BooksComponent, BooksListComponent],
  imports: [CommonModule, SevicesModule],
  exports: [BooksComponent],
})
export class BooksModule {}
