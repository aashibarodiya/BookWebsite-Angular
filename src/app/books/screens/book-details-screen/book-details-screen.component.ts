import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/services/book';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'book-details-screen',
  templateUrl: './book-details-screen.component.html',
  styleUrls: ['./book-details-screen.component.css']
})
export class BookDetailsScreenComponent implements OnInit {
  book: Book|null|undefined=null;
  error?:string;
  id?:string;

  showDeleteDialog=false;
  showUpdateDialog=false;
  constructor(
    @Inject("BookService") private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    
  ) { }

 

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe( params=>{
    //   this.id=params['id'];
    //   this.fetchBook(this.id);
    // })
    this.activatedRoute.params.subscribe( params=>{
      this.id=params["id"];
      //get the data associated with this id here
      this.bookService
          .getBookById(this.id!)
          .subscribe({
            next: book=>{
              this.book=book;
              this.error=undefined;
            },
            error: error=>{
              console.log('in get book by Id subscription error:',error.status); 
              if(error.status==404)
                this.error=`Invalid id ${this.id}`;
              else if (error.status==0)
                this.error="Couldn't connect to the server";
              this.book=undefined; //NOT Found
            }
          })
    });
    console.log(this.activatedRoute);
  }

  /*
      null--> we are still expecting a book
      undefined--> we failed to find the book
      book ---> we got the book
  */


  // fetchBook(id:string) {
    
  //   this
  //       .bookService
  //       .getBookById(id)
  //       .then(b=>this.book=b)
  //       .catch(error=>{
  //         console.log('error loading book', error.message);
  //         this.book=undefined; //book not found
  //       });
      

  // }

  handleShowDeleteDialog(){
    this.showDeleteDialog=true;
    console.log('show delete dialog changed to ', this.showDeleteDialog);
  }
  handleShowUpdateDialog(){
    this.showDeleteDialog=true;
    console.log('show update dialog changed to ', this.showUpdateDialog);
  }
  showErrorPrompt=false;
  errorMessage='';
  errorTitle=''; 
  handleDelete(confirmation:boolean){
    console.log('User Selected to Delete', confirmation);
    this.showDeleteDialog=false;
    if(!confirmation)
      return;
    this
      .bookService
      .removeBook(this.book!.id)
      .subscribe({
        next: response=> { this.router.navigate(['/book/list'])},
        error: err=>{ 
          console.log('error',err);
          this.showErrorPrompt=true;
          if(err.status===401){
            this.errorMessage="You Need to Login to carry out this operation";
            this.errorTitle="Authentication Error";
          } else if(err.status===404){
            this.errorMessage="Book Not Found";
            this.errorTitle="No Such Book";
          } else{
            this.errorTitle="Something went wrong";
            this.errorMessage=`Error: ${err.status}`;
            console.log(err);
          }
        } 
      })
    }
      
      handleUpdate(confirmation:boolean){
        console.log('User Selected to Update', confirmation);
        this.showUpdateDialog=false;
        if(!confirmation)
          return;
        this
          .bookService
          .updateBook(this.book!)
          .subscribe({
          next: response=> { this.router.navigate(['/book/details',this.book!.id])},
          error: err=>{ 
            console.log('error',err);
            this.showErrorPrompt=true;
            if(err.status===401){
              this.errorMessage="You Need to Login to carry out this operation";
              this.errorTitle="Authentication Error";
            } else if(err.status===404){
              this.errorMessage="Book Not Found";
              this.errorTitle="No Such Book";
            } else{
              this.errorTitle="Something went wrong";
              this.errorMessage=`Error: ${err.status}`;
              console.log(err);
            }
          } 
    
          })
    

  }

}
