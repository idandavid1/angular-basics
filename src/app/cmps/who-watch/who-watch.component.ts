import { Component } from '@angular/core';
import { User } from 'src/app/modules/user.module';

@Component({
  selector: 'who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss']
})
export class WhoWatchComponent {
  users!: User[]

  ngOnInit(): void {
    this.users = [
      { _id: "101", name: "Brian", imgUrl: "imgs/profile-1.png" },
      { _id: "102", name: "Ofer", imgUrl: "imgs/profile-2.png" },
      { _id: "103", name: "Dan", imgUrl: "imgs/profile-3.png" },
      { _id: "104", name: "Gil", imgUrl: "imgs/profile-4.png" },
    ]
  }
}