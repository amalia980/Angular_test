import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //can add more styl files here with a comma
})
export class AppComponent {
 oddNumbers: number[] = [];//creating array to print out each odd number on for loop. :number[], meaning this property should hold an array of type numbers

 evenNumbers: number[] = [];

  onInterval(startNumber: number) {
    if (startNumber % 2 === 0) {//check if the started number on the click btn is even
      this.evenNumbers.push(startNumber);
    } else {
      this.oddNumbers.push(startNumber);//or push the odd numbers, which is the rest of numbers that are not even
    }
    console.log(startNumber);
  }
}
