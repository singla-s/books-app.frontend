import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { SevicesModule } from '../services/sevices.module';

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, SevicesModule],
  exports: [BooksComponent],
})
export class BooksModule {}
