import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})

export class ShowTimeComponent implements OnInit, OnDestroy {
  time = Date.now()
  isDark = false
  intervalId: any

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = Date.now()
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getImgUrl = () => {
    return `../../../assets/imgs/${this.getSeason()}.png`
  }

  toggleIsDark = () => {
    this.isDark =!this.isDark
  }

  getClassList = () => {
    return {
      dark: this.isDark,
      'show-time': true
    }
  }

  getSeason() {
    const seasons = [
        "Winter", "Winter", "Spring", "Spring", "Summer", "Summer",
        "Summer", "Summer", "Fall", "Fall", "Winter", "Winter"]
    const date = new Date(this.time)
        return seasons[date.getMonth()]
  }
}
