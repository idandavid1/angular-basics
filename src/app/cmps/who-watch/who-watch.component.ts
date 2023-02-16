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
      { _id: "101", name: "Brian", imgUrl: '../../../assets/imgs/profile-1.png' },
      { _id: "102", name: "Ofer", imgUrl: '../../../assets/imgs/profile-2.png' },
      { _id: "103", name: "Dan", imgUrl: '../../../assets/imgs/profile-3.png' },
      { _id: "104", name: "Gil", imgUrl: '../../../assets/imgs/profile-4.png' },
    ]
  }

  makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
  makeName() {
    const names = ['Idan' , 'Ofer', 'Dan', 'Ofek', 'Gal', 'Dor', 'Ben' , 'Dana' , 'Stav', 'Tommy', 'Daniel', 'Noga', 'Sharon','Yonatan']
    return names[Math.floor(Math.random() * names.length)]
  }

  makeImgUrl() {
    return Math.floor(Math.random() * 3) + 1
  }

  removeUser = (userId: string) => {
    this.users = this.users.filter(user => user._id !== userId)
  }

  onAddWatcher = () => {
    const watcherToAdd = {
      _id: this.makeId(),
      name: this.makeName(),
      imgUrl:`../../../assets/imgs/profile-${this.makeImgUrl()}.png`

    }
    this.users.unshift(watcherToAdd)
  }
}