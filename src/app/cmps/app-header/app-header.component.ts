import { Component , Input ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  @Input() isWatchPage : boolean = false;
  @Output() toggleWatchPage = new EventEmitter()

  onToggleWatchPage() {
    this.toggleWatchPage.emit()
  }
}
