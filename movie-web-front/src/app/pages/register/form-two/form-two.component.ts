import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  hide: boolean = true;
  registerForm2: FormGroup;
  notSame = 'false';

  


  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm2 = this.fb.group({
      password: new FormControl('', [Validators.minLength(4), Validators.required ]),
  
      confirmPassword: new FormControl('',[]),
    },{validators: this.checkConfirm});    
  }

  
  get form2(): FormGroup{
    return this.registerForm2 as FormGroup
  }

  checkConfirm: ValidatorFn = (group: FormGroup):  ValidationErrors | null => { 
    const password = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return password !== confirmPass ? { [this.notSame]: true } : null;
  }
 

  
}
