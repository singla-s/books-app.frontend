import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layoutcomponent/header/header.component';
import { FooterComponent } from './layoutcomponent/footer/footer.component';
import { MenuComponent } from './layoutcomponent/menu/menu.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MenuComponent],
  imports: [BrowserModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
