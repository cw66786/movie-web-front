import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  AsyncValidatorFn,
  AsyncValidator,
} from '@angular/forms';
import { debounceTime, map, Observable, of } from 'rxjs';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

import { FormErrorService } from 'src/app/core/form-error.service';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss'],
})
export class FormOneComponent implements OnInit {
  notSame: string = 'false';
  registerForm1: FormGroup;

  constructor(
    public errorMatcher: FormErrorService,
    private fb: FormBuilder,
    private formService: FormServicesService
  ) {}

  ngOnInit(): void {
    this.registerForm1 = this.fb.group(
      {
        email: new FormControl(
          '',
          [Validators.email, Validators.required],
          [this.emailChecker]
        ),

        confirmEmail: new FormControl('', []),
      },
      { validators: this.checkConfirm }
    );
  }

  checkConfirm: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email !== confirmEmail ? { [this.notSame]: true } : null;
  };

  emailChecker: AsyncValidatorFn = (
    control: FormControl
  ): Observable<ValidationErrors | null> => {
    return this.formService.checkEmail(control.value).pipe(
      debounceTime(500),
      map((data: any) => {
        if (data === true) {
          return { taken: true };
        }
        return null;
      })
    );
  };

  transferEmail(email: string) {
    this.formService.transferEmail(email);
  }
}
