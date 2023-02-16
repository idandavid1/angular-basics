import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
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
