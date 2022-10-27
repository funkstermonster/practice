import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/mock/user-detail-mock';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor() {}

  users: User[] = users;

  ngOnInit(): void {
    console.log(this.users);
    this.getUserOverThirty();
  }

  getUserOverThirty(): User[] {
    return this.users.filter((data) => data.age >= 30);
    
  }
}
