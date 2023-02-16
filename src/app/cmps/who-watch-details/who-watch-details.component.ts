import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/modules/user.module';

@Component({
  selector: 'who-watch-details',
  templateUrl: './who-watch-details.component.html',
  styleUrls: ['./who-watch-details.component.scss']
})
export class WhoWatchDetailsComponent {
  @Input() user !: User
  @Output() closeModal = new EventEmitter()
  getMovies() {
    return this.user.movies.join(', ')
  }

  onCloseModal() {
    this.closeModal.emit()
  }
}
