import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'show-coords',
  templateUrl: './show-coords.component.html',
  styleUrls: ['./show-coords.component.scss']
})
export class ShowCoordsComponent implements OnInit, OnDestroy{
  pos = {
    x: 0,
    y: 0
  }

  ngOnInit() {
    document.addEventListener("mousemove", (event) => {
      this.pos.x = event.clientX;
      this.pos.y = event.clientY;
    })
  }

  ngOnDestroy() {
    document.removeEventListener("mousemove", (event) => {
      this.pos.x = event.clientX;
      this.pos.y = event.clientY;
    })
  }
}
