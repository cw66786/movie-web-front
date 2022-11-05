import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/core/form-error.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {
  notSame: string = 'false';
  registerForm1: FormGroup;
 


  

  constructor(public errorMatcher: FormErrorService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm1 = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required ]),
  
      confirmEmail: new FormControl('', []),
    },{validators: this.checkConfirm});    
  }


  checkConfirm: ValidatorFn = (group: FormGroup):  ValidationErrors | null => { 
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email !== confirmEmail ? { [this.notSame]: true } : null;
  }
}


