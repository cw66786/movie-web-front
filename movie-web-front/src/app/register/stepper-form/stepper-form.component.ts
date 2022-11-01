import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/form-error.service';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {

  registerForm1 = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),

    confirmEmail: new FormControl('', [Validators.required, Validators.email ]),
  });    


  

  constructor(public errorMatcher: FormErrorService) {}

  ngOnInit(): void {
  }

}


