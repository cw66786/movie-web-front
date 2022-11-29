import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.scss'],
})
export class SignInComponent implements OnInit {
  hide: boolean = true;
  loginError: boolean;

  email = new FormControl('', [Validators.email, Validators.required]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private formService: FormServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formService.loginError$.subscribe((res) => (this.loginError = res));
  }

  transferInfo(userEmail: string, userPassword: string) {
    if (this.email.valid && this.password.valid) {
      this.formService.signIn(userEmail, userPassword);
    }
  }
}
