import { Observable } from "rxjs";
import { Author } from "./author";

export interface AuthorService{

    getAllAuthors():Observable<Author[]>;
    getAuthorById(authorId:string):Observable<Author>;
    addAuthor(author:Author):Observable<Author>;
    removeAuthor(authorId:string):Observable<void>;
    updateAuthor(author:Author):Observable<Author>;
    
}