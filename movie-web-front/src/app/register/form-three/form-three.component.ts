import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {

  registerForm3 = new FormGroup({
    tmbdKey: new FormControl('', [ Validators.required ]),

    userName: new FormControl('', [Validators.required]),
  });    

  
  constructor() { }

  ngOnInit(): void {
  }

}
