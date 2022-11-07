import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'user-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  user:any;

  constructor(@Inject("UserService")private userService: UserService) { }

  ngOnInit(): void {

    setInterval(async ()=>{
      this.user = await this
                      .userService
                      .getUserStatusAnnouncement();
    },500);

  }

  async handleLogout(){
    await this.userService.logout();
  }

}
