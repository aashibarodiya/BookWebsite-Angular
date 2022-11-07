import { Component, Inject, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'book-list-screen',
  templateUrl: './book-list-screen.component.html',
  styleUrls: ['./book-list-screen.component.css']
})
export class BookListScreenComponent implements OnInit {
  books? : Book[];
  constructor(
    @Inject("BookService") private bookService:BookService
    
  ) { }

 

  ngOnInit(): void {
    console.log('fetching books');
        this
            .bookService.getAllBooks()
            .pipe(
                catchError((error:any) =>{
                    console.log('error in getAllBooks',error.message);
                    return throwError(()=>error);
                })
            )
            .subscribe((books:any)=>{
                this.books=books;
            });

}
}
