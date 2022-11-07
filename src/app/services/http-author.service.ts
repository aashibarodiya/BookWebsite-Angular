import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap, throwError } from "rxjs";
import { randomize } from "../utils/randomize";
import { Author } from "./author";
import { AuthorService } from "./author-service";
import { UserService } from "./user-service";

const url='http://localhost:5000/api/authors';

@Injectable({
    providedIn:"root"    
})
export class HttpAuthorService implements AuthorService {

    constructor(
        private http: HttpClient,
        @Inject("UserService") private userService: UserService
    ){  }

    getAllAuthors(): Observable<Author[]> {
       
        return this
                    .http
                    .get<Author[]>(url)
                    .pipe(                       
                        map((authors:Author[])=>randomize(authors))
                    );
       
    }


    getAuthorById(authorId: string): Observable<Author> {
        return this
                    .http
                    .get<Author>(`${url}/${authorId}`);
                    
                    
    }

    
    get options(){
        return {
            headers: this.userService.getAuthenticationHeader()
        }
    }

    addAuthor(author: Author): Observable<Author> {
        return this
                .http
                .post<Author>(url,author, this.options );
    }
    _handleError(error:HttpErrorResponse){
        
        console.log('error adding author', error);
        return throwError(()=> error); //else let the error go        
    }
    removeAuthor(authorId: string): Observable<void> {
        return this
                    .http
                    .delete<void>(`${url}/${authorId}`,this.options);
    }
    updateAuthor(author: Author): Observable<Author> {
        
        return this
                    .http
                    .put<Author>(`${url}/${author.id}`, author, this.options);
    }
    
}