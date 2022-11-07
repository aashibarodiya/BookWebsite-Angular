import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { AppRangeComponent } from './components/app-range.component';
import { InfoLineComponent } from './components/info-line/info-line.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TrimPipe } from './pipes/trim.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ShowDirective } from './directives/show.directive';
import { CustomDomainDirective } from './validators/custom-domain.directive';
import { CompareDirective } from './validators/compare.directive';
import { RxjstestComponent } from './components/rxjstest/rxjstest.component';
import {  HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/popup/popup.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    CustomDomainDirective,
    TagListComponent,
    AppRangeComponent,
    InfoLineComponent,
    LoaderComponent,
    NotFoundComponent,
    TrimPipe,
    HighlightDirective,
    ShowDirective,
    CompareDirective,
    RxjstestComponent,
    PopupComponent,
    ChatComponent,
    
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    ChatComponent,
    PopupComponent,
    HttpClientModule,
    RxjstestComponent,
    CustomDomainDirective,
    CompareDirective,
    ReactiveFormsModule,
    TagListComponent,
    AppRangeComponent,
    InfoLineComponent,
    LoaderComponent,
    NotFoundComponent,
    TrimPipe,
    HighlightDirective,
    ShowDirective,
  ],
 
})
export class UtilsModule { }
