import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, take, tap } from 'rxjs';
import { Author } from 'src/app/services/author';
import { InMemoryAuthorService } from 'src/app/services/in-memory-author-service';

@Component({
  selector: 'home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit,OnDestroy {

  constructor(private authorService: InMemoryAuthorService) { }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
      this.subscription=undefined;
    }
  }
  author?:Author;

  authors:Author[]=[];

  subscription?:any;

  ngOnInit(): void {
    this.subscription=this
      .authorService
      .getRandomAuthors()
      .pipe(
        //filter((a:Author)=>  this.authors.indexOf(a)==-1),        
        //take(this.authorService.authors.length),
      )
      .subscribe((a)=>{
       //this.authors.push(a);
       this.author=a;
      });
  }

}
