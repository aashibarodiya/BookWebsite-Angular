import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'book-add-screen',
  templateUrl: './book-add-screen.component.html',
  styleUrls: ['./book-add-screen.component.css']
})
export class BookAddScreenComponent implements OnInit {
  book:Book;

  constructor( 
    private router:Router,
    @Inject("BookService") private service:BookService) {
      this.book ={
        id:'',
        title:'',
        author:'',
        authorId:'',
        pages:'',
        tagList:[],
        tags:'',
        rating:'',
        description:'',
        coverUrl:'',
        price:0,
        }
      
    };
  

  ngOnInit(): void {
  }
  errors?:any;

  onSave(){
    
    this
      .service
      .addBook(this.book)
      .subscribe({
        next: book=>{
          console.log('book added ',book);
          this.errors=undefined;
          this.router.navigate(['/book/list']);
          
        },

        error: err=>{
          console.log('book add failed',err);
          this.errors=err.error.errors;
        }
      })
   
  }


}
