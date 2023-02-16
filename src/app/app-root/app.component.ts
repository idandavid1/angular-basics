import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  countDown = Date.now() + 7 * 1000
  isWatchPage = false

  toggleWatchPage() {
    this.isWatchPage =!this.isWatchPage
  }

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
