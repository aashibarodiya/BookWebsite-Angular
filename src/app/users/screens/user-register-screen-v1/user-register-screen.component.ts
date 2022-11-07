import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/services/user';

@Component({
  selector: 'user-register-screen',
  templateUrl: './user-register-screen.component.html',
  styleUrls: ['./user-register-screen.component.css']
})
export class UserRegisterScreenComponent implements OnInit {


  name:FormControl;
  email:FormControl;
  password:FormControl;
  confirmPassword:FormControl;

  user?:User

  status='';
  statusStyle='text-primary';

  
  constructor() {

    const passwordRules=[
      Validators.required, 
      Validators.minLength(5),
      Validators.maxLength(15)
    ];

    this.name=new FormControl('',[
      Validators.required,
    ]);
    this.email=new FormControl('',[
      Validators.required, 
      Validators.email]
    );
    this.password=new FormControl('',passwordRules);
    this.confirmPassword=new FormControl('',passwordRules);


  }

  handleReigsteration(){

    if(this.password.value!==this.confirmPassword.value){
      this.status='passwords dont match' ;
      this.statusStyle='text-danger';
      return ;
    }

    this.user={
      name:this.name.value, 
      email:this.email.value, 
      password:this.password.value,      
    };

    this.status=`Registeration successful ${JSON.stringify(this.user)}` ;
    this.statusStyle="text text-success";
    
  }

  ngOnInit(): void {
  }

}
