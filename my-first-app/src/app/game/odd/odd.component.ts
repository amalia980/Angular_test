import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() myNumber: number;//this should be passed from outside, thats why we use Input. to pass data from outside to inside this component

  constructor() { }

  ngOnInit(): void {
  }

}
