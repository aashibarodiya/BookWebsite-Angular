import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { from, map, Observable, tap, throwError } from "rxjs";
import { delay } from "../utils/delay";
import { randomize } from "../utils/randomize";
import { Book } from "./book";
import { BookService } from "./book-service";
import { UserService } from "./user-service";

const url = "http://localhost:5000/api/books";

@Injectable({
    providedIn:"root"    
})

export class SimpleHttpBookService implements BookService {
    constructor(
        private http: HttpClient,
        @Inject("UserService") private userService: UserService
    ){  }


    async _getAllBooksPromise(){
        var response = await fetch(url);
        return await response.json();
    }

    
    getAllBooks(): Observable<Book[]> {
        return from(this._getAllBooksPromise())   
            .pipe(
                tap((x: any) => console.log('json', x)),
                map((books: Book[]) => books.map((b: any) => ({ ...b, author: b.author.name }))),
                map( books => randomize(books))
            );
    }
         
                    
    getBookById(bookId: string): Observable<Book> {
        return this
                    .http
                    .get<Book>(`${url}/${bookId}`);
    }

    get options(){
        return {
            headers: this.userService.getAuthenticationHeader()
        }
    }
    addBook(book: Book): Observable<Book> {
        return this
        .http
        .post<Book>(url,book,this.options );
    }
    _handleError(error:HttpErrorResponse){
    console.log('error adding book', error);
    return throwError(()=> error); //else let the error go  
    }


    removeBook(id: string): Observable<void> {
        return this
        .http
        .delete<void>(`${url}/${id}`,this.options );
    }
    updateBook(book: Book): Observable<Book> {
        return this
        .http
        .put<Book>(`${url}/${book.id}`,book,this.options);
    }

}