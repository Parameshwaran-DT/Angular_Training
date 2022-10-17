import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import User from "./user";
import { UserInformation } from './userInformation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userInformation = new UserInformation();
  users = new Array<User>();

  constructor(userService: UserService) {
    userService.getUsers().subscribe(response => {
      console.log("UserService:", response);
      this.userInformation.page = response.page;
      this.userInformation.per_page = response.per_page;
      this.userInformation.support = response.support;
      this.userInformation.total = response.total;
      this.userInformation.total_pages = response.total_pages;
      this.userInformation.data = response.data.map((item: { avatar: string; email: string; first_name: string; last_name: string; id: Number; }) => {
        var user = new User();
        user.avatar = item.avatar;
        user.email = item.email;
        user.first_name = item.first_name;
        user.last_name = item.last_name;
        user.id = item.id;
        return user;
      });
      this.users = this.userInformation.data;

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

