import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-basics';
  countDown = Date.now() + 7 * 1000

  playAudio(){
    let audio = new Audio()
    audio.src = "../../assets/sound/winning.mp3"
    audio.load()
    audio.play()
  }

  endCountDown() {
    // this.playAudio()
  }
}
