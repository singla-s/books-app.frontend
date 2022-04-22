import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
