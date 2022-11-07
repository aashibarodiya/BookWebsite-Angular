import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddScreenComponent } from './screens/book-add-screen/book-add-screen.component';
import { BookEditScreenComponent } from './screens/book-edit-screen/book-edit-screen.component';
import { BookListScreenComponent } from './screens/book-list-screen/book-list-screen.component';
import { BookDetailsScreenComponent } from './screens/book-details-screen/book-details-screen.component';
import { BookManageScreenComponent } from './screens/book-manage-screen/book-manage-screen.component';
import { UtilsModule } from '../utils/utils.module';
import { RoutesModule } from '../routes/routes.module';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RatingAdvisePipe } from './pipes/rating-advise.pipe';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookEditorComponent } from './components/book-editor/book-editor.component';
import { FormsModule } from '@angular/forms';

import { FavoriteBookComponent } from './components/favorite-book/favorite-book.component';



@NgModule({
  declarations: [
    BookAddScreenComponent,
    BookEditScreenComponent,
    BookListScreenComponent,
    BookDetailsScreenComponent,
    BookManageScreenComponent,
    BookDetailsComponent,
    RatingAdvisePipe,
    BookCardComponent,
    BookEditorComponent,
    FavoriteBookComponent,

  ],
  exports:[
    BookAddScreenComponent,
    BookEditScreenComponent,
    BookListScreenComponent,
    BookDetailsScreenComponent,
    BookManageScreenComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RoutesModule,
    FormsModule,
  ]
})
export class BooksModule { }
