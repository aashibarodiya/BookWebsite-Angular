import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/services/author';
import { AuthorService } from 'src/app/services/author-service';
import { InMemoryAuthorService } from 'src/app/services/in-memory-author-service';

@Component({
  selector: 'author-details-screen',
  templateUrl: './author-details-screen.component.html',
  styleUrls: ['./author-details-screen.component.css']
})
export class AuthorDetailsScreenComponent implements OnInit {

  id?:string;
  author:Author|null|undefined=null; 
  error?:string;

  showDeleteDialog=false;
  showUpdateDialog=false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    @Inject("AuthorService") private authorService:AuthorService,

  ) { 
  }

  ngOnInit(): void {
    //this.id=this.activatedRoute.snapshot.params["id"];
    
    this.activatedRoute.params.subscribe( params=>{
      this.id=params["id"];
      //get the data associated with this id here
      this.authorService
          .getAuthorById(this.id!)
          .subscribe({
            next: author=>{
              this.author=author;
              this.error=undefined;
            },
            error: error=>{
              console.log('in get author by Id subscription error:',error.status); 
              if(error.status==404)
                this.error=`Invalid id ${this.id}`;
              else if (error.status==0)
                this.error="Couldn't connect to the server";
              this.author=undefined; //NOT Found
            }
          })
    });
    console.log(this.activatedRoute);
  }

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
      .authorService
      .removeAuthor(this.author!.id)
      .subscribe({
        next: response=> { this.router.navigate(['/author/list'])},
        error: err=>{ 
          console.log('error',err);
          this.showErrorPrompt=true;
          if(err.status===401){
            this.errorMessage="You Need to Login to carry out this operation";
            this.errorTitle="Authentication Error";
          } else if(err.status===404){
            this.errorMessage="Author Not Found";
            this.errorTitle="No Such Author";
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
    if(this.author?.books)
      this.author!.books=undefined;
    this.showUpdateDialog=false;
    if(!confirmation)
      return;
    this
      .authorService
      .updateAuthor(this.author!)
      .subscribe({
      next: response=> { this.router.navigate(['/author/details',this.author!.id])},
      error: err=>{ 
        console.log('error',err);
        this.showErrorPrompt=true;
        if(err.status===401){
          this.errorMessage="You Need to Login to carry out this operation";
          this.errorTitle="Authentication Error";
        } else if(err.status===404){
          this.errorMessage="Author Not Found";
          this.errorTitle="No Such Author";
        } else{
          this.errorTitle="Something went wrong";
          this.errorMessage=`Error: ${err.status}`;
          console.log(err);
        }
      } 

      })
    }
}
