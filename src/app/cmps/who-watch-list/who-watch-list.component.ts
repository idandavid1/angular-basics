import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/modules/user.module';

@Component({
  selector: 'who-watch-list',
  templateUrl: './who-watch-list.component.html',
  styleUrls: ['./who-watch-list.component.scss']
})
export class WhoWatchListComponent {

  @Input() users!: User[]
  @Output() removeUser = new EventEmitter<string>()
  currUserId = ""
  currUser: any

  trackByFn(item: any) {
    return item._id
  }

  onRemoveUser(userId: string) {
    this.removeUser.emit(userId)
  }

  onToggleModal(userId: string) {
    this.currUserId = userId
    this.currUser = this.users.find(user => user._id === userId)
  }

  closeModal() {
    this.currUserId = ""
  }

  // getUser(userId: string) {
  //   console.log(userId)
  //   return this.users.find(user => user._id === userId)
  // }
}
