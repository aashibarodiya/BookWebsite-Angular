import { Observable } from "rxjs";
import { Book } from "./book";


export interface BookService{

    getAllBooks(): Observable<Book[]>;

    getBookById(id: string): Observable<Book>;

    addBook(book: Book): Observable<Book>;

    removeBook(id: string): Observable<void>;

    updateBook(book:Book): Observable<Book>;

}