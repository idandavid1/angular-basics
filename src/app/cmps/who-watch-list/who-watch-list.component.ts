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

  trackByFn(idx: number, item: any) {
    return item._id
  }

  onRemoveUser(userId:string){
    this.removeUser.emit(userId)
  }
    // this.removeUser(userId)
}
