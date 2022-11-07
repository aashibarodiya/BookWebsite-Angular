import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user-service';
import { compare } from 'src/app/utils/validators/compare.directive';
import { booksOrgEmail, domainEmail } from 'src/app/utils/validators/custom-validators';
import { uniqueEmailValidator } from '../../validators/unique-email.directive';

@Component({
  selector: 'user-register-screen',
  templateUrl: './user-register-screen.component.html',
  styleUrls: ['./user-register-screen.component.css']
})
export class UserRegisterScreenComponent implements OnInit {


  
  user?:User
  
  status='';
  statusStyle='text-primary';
  
  form:FormGroup;
  
  constructor(private builder :FormBuilder,
              @Inject("UserService") private userService:UserService,
              private router:Router
              ) {

    const passwordRules=[
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(15)
    ];

    this.form=this.builder.group({
      name: ['', [Validators.required]],
      email:['', [
                  Validators.required,
                  Validators.email, 
                  domainEmail('books.org','storian.in','storian.com')
                ],
                [
                  uniqueEmailValidator(this.userService)
                ]
            ],
      profilePicture:['', [Validators.required ]],
      password:['',passwordRules],
      confirmPassword:['',passwordRules]
    },{validator: compare('password','confirmPassword')});


      // this.form=new FormGroup({
    //   name: new FormControl('',[Validators.required]),
    //   email: new FormControl('',[Validators.required, Validators.email]),
    //   password:new FormControl('',passwordRules),
    //   confirmPassword:new FormControl('',passwordRules)
    // });
     


  }
  handleReigsteration(){

    console.log(this.form);
    if(this.form.invalid){
      console.log('form is invalid');
      return;
    }
    
    this.user={
      ...this.form.value,
      roles:[
        {name:'user'}
      ],
      favoriteBooks:[],
      favoriteAuthors:[]
    
    };

    console.log('registering', this.user);

      (<Observable<User>>(this
        .userService
        .register(this.user!)
        ))
        .pipe(
          tap((response:any)=>console.log('response',response)),
        )
        .subscribe({
          next:(user:any)=>{
            console.log('registered', user);
            this.router.navigate(['/user/login']);
          },
          error: error=> console.log('error',error)
        })
      
   
  }


  
  ngOnInit(): void {
  }

}
