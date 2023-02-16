import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy{
  @Input() countDown!: number
  @Output() due = new EventEmitter()
  time = 0
  intervalId: any

  ngOnInit(): void {
    this.time = this.countDown - Date.now()
    this.intervalId = setInterval(() => {
      this.time -= 1000
      if (this.time <= 1000){
        clearInterval(this.intervalId)
        this.due.emit()
      }

    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getClassList = () => {
    return {
      'less-ten': this.time <= 10 * 1000
    }
  }
}
