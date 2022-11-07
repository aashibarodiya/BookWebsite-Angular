import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shell/components/app-header/app-header.component';
import { AppFooterComponent } from './shell/components/app-footer/app-footer.component';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { HomeScreenComponent } from './shell/screens/home-screen/home-screen.component';
import { NotFoundScreenComponent } from './shell/screens/not-found-screen/not-found-screen.component';

import { UtilsModule } from './utils/utils.module';
import { RoutesModule } from './routes/routes.module';
import { InMemoryAuthorService } from './services/in-memory-author-service';
import { InMemoryAsyncBookService } from './services/in-memory-async-book-service';

import {BookService} from './services/book-service';
import { InMemoryUserService } from './services/in-memory-user-service';
import { SimpleHttpBookService } from './services/simple-http-book-service';
import { HttpAuthorService } from './services/http-author.service';
import { HttpUserService } from './services/http-user-service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeScreenComponent,
    NotFoundScreenComponent,
  ],
  imports: [    
    RoutesModule,
    BrowserModule,
    AuthorsModule,
    UsersModule,
    BooksModule,
    UtilsModule,

    
  ],
 
  providers: [
    //register your services here
    InMemoryAuthorService,
    
    {
      provide:"AuthorService",
      useClass:HttpAuthorService
    },
    
    { 
      provide: "BookService", 
      //useClass: InMemoryAsyncBookService 
      useClass:SimpleHttpBookService
    },
    
    { 
      provide: "UserService", 
      //useClass: InMemoryUserService
      useClass: HttpUserService
    },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
