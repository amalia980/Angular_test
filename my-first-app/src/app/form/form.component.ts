import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultAns = 'advanced';



  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
