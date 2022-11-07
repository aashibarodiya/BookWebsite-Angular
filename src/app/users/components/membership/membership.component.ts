import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'user-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit, OnDestroy {

  user?:any;
  

  constructor(@Inject("UserService")private userService: UserService) { }
  

  updateUserStatus(details:any): void {
    
    if(details)
      this.user=details.user;
    else
      this.user=undefined;

  }

  ngOnInit(): void {
    
      console.log('membership component initialized');
      var details= this.userService.getLoggedInUser();
      if(details)
        this.user=details.user;


      this
        .userService
        .getUserStatusAnnouncement()
        .subscribe(details=>this.updateUserStatus(details))

      
    
  }


  ngOnDestroy(): void {
   
    this.userService.getUserStatusAnnouncement().unsubscribe();
  }

 
  
  async handleLogout(){
    await this.userService.logout();
  }

  
}
