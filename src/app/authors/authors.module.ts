import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListScreenComponent } from './screens/author-list-screen/author-list-screen.component';
import { AuthorAddScreenComponent } from './screens/author-add-screen/author-add-screen.component';
import { AuthorDetailsScreenComponent } from './screens/author-details-screen/author-details-screen.component';
import { AuthorEditScreenComponent } from './screens/author-edit-screen/author-edit-screen.component';
import { AuthorManageScreenComponent } from './screens/author-manage-screen/author-manage-screen.component';
import { UtilsModule } from '../utils/utils.module';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { RoutesModule } from '../routes/routes.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorEditorComponent } from './components/author-editor/author-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthorListScreenComponent,
    AuthorAddScreenComponent,
    AuthorDetailsScreenComponent,
    AuthorEditScreenComponent,
    AuthorManageScreenComponent,
    AuthorCardComponent,
    AuthorDetailsComponent,
    AuthorEditorComponent
  ],
  exports: [
    AuthorDetailsComponent,
    AuthorListScreenComponent,
    AuthorAddScreenComponent,
    AuthorDetailsScreenComponent,
    AuthorEditScreenComponent,
    AuthorManageScreenComponent
  ],
  imports: [
    UtilsModule,
    CommonModule,
    RoutesModule,
    FormsModule
  ],
  
})
export class AuthorsModule { }
