import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/services/author';
import { AuthorService } from 'src/app/services/author-service';
import { InMemoryAuthorService } from 'src/app/services/in-memory-author-service';

@Component({
  selector: 'author-add-screen',
  templateUrl: './author-add-screen.component.html',
  styleUrls: ['./author-add-screen.component.css']
})
export class AuthorAddScreenComponent implements OnInit {

  author:Author;
  //service: InMemoryAuthorService;

  constructor(
    private router:Router,
    @Inject("AuthorService") private service:AuthorService
    
  ) {
    this.author ={
        id:'',
        name:'',
        biography:'',
        birthDate:'',
        photoUrl:'',
        deathDate:null,
        tags:'',
        tagList:[],
        books:[],
        social:{
          id:0,
          email:null,
          webSite:null
        }
      
    };
  
    //this.serviceook=new InMemoryAuthorService(); 
    //this.service=InMemoryAuthorService.instance;
  
  }

  ngOnInit(): void {
  }

  errors?:any;
  errorTitle='';
  errorMessage='';
  

  onSave(){
    
    this
      .service
      .addAuthor(this.author)
      .subscribe({
        next: author=>{
          console.log('author added ',author);
          this.errors=undefined;
          this.router.navigate(['/author/list']);
          
        },

        error: err=>{
          console.log('author add failed',err);
          
          if(err.status==401){
            this.errorTitle="Un Authorized";
            this.errorMessage="You Need to Login to Add New Author";
          } else if (err.status==400){
            this.errors=err.error.errors;
            this.errorTitle='';
            this.errorMessage='';
          }
          else{
            this.errorTitle='';
            this.errorMessage='';
          } 
        }
      })
   
  }

}
