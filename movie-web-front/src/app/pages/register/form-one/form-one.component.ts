import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/core/form-error.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {

  registerForm1 = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),

    confirmEmail: new FormControl('', [Validators.required, Validators.email ]),
  });    


  

  constructor(public errorMatcher: FormErrorService) {}

  ngOnInit(): void {
  }

}


