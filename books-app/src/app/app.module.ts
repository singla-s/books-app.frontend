import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layoutcomponent/header/header.component';
import { FooterComponent } from './layoutcomponent/footer/footer.component';
import { MenuComponent } from './layoutcomponent/menu/menu.component';
import { BooksComponent } from './books/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
