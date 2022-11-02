import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormErrorService } from 'src/app/form-error.service';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  hide: boolean = true;

  checkConfirm: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let password = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return password === confirmPass ? null : { notSame: true };
  }

  registerForm2 = new FormGroup({
    password: new FormControl('', [Validators.minLength(4), Validators.required ]),

    confirmPassword: new FormControl('',[]),
  },{validators: this.checkConfirm});    


  

  constructor(public errorMatcher: FormErrorService) {}

  ngOnInit(): void {
  
  }

  click(){
    console.log(this.registerForm2.get('password').value , this.registerForm2.get('confirmPassword').value  )

  }



 

  
}
