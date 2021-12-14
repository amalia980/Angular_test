import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() myInterval = new EventEmitter<number>();//myInterval is also an property

  interval;//set interval and store it in a property, to be able to access it later and clear it

  number = 1;//emit an incrementing number that starts on 0

  //number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.myInterval.emit(this.number);//(this.number + 1);
      this.number++;
    },1000);//emit an event each second
  }

  pauseGame() {
    clearInterval(this.interval);
  }


/*
  setInterval(startGame() {
    this.start.emit(ref)
  }, 1000);
*/
}
