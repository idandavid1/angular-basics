import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/modules/user.module';

@Component({
  selector: 'who-watch-preview',
  templateUrl: './who-watch-preview.component.html',
  styleUrls: ['./who-watch-preview.component.scss']
})
export class WhoWatchPreviewComponent {
  @Input() user!: User;
}
