import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {
hide: boolean = true;
count: number = 0;


  
email = new FormControl('', [Validators.email, Validators.required ]);

password = new FormControl('', [Validators.required, Validators.min(8) ]);
  

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
