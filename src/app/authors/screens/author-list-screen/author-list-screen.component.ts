import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { AuthorService } from 'src/app/services/author-service';
import { InMemoryAuthorService } from 'src/app/services/in-memory-author-service';
import { Author, AuthorSummary } from '../../../services/author';

@Component({
    selector: 'author-list-screen',
    templateUrl: './author-list-screen.component.html',
    styleUrls: ['./author-list-screen.component.css']
})
export class AuthorListScreenComponent implements OnInit {

    //authorService:InMemoryAuthorService;
    authors?: AuthorSummary[];

    constructor(
        //private authorService:InMemoryAuthorService
        @Inject("AuthorService") private authorService: AuthorService

        ) {
        //this.authorService = new InMemoryAuthorService();
        //this.authorService = InMemoryAuthorService.instance;
    }

    ngOnInit(): void {
        console.log('fetching authors');
        this
            .authorService.getAllAuthors()
            .pipe(
                catchError((error:any) =>{
                    console.log('error in getAllAuthors',error.message);
                    return throwError(()=>error);
                })
            )
            .subscribe((authors:any)=>{
                this.authors=authors;
            });
    }



   

    


}
