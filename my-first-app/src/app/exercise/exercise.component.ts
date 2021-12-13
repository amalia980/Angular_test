import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1); WILL ONLY PRINT OUT NUMBERS FROM STARTING WITH 1
    this.log.push(new Date());
    //THIS LOGS OUT THE CURRENT DATE
  }

  constructor() {

  }

  ngOnInit(): void {
  }
}
