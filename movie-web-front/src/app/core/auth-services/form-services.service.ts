import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, map, of, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormServicesService {
  private baseUrl = 'http://localhost:4231/';
  private userEmail: string;
  private userPassword: string;
  private userName: string;
  private tmdbKey: string;
  private role: string;
  private user: User;

  jwtHelper = new JwtHelperService();

  loginError: boolean = false;
  errorBehave$ = new BehaviorSubject(this.loginError);
  loginError$ = this.errorBehave$.asObservable();

  currentUser: any = {
    username: '',
    role: '',
  };
  userBehave$ = new BehaviorSubject(this.currentUser);
  currentUser$ = this.userBehave$.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  checkEmail(userEmail: string) {
    return this.http.post(this.baseUrl + 'auth/check-email', {
      email: userEmail,
    });
  }

  //register related code

  transferEmail(email: string) {
    console.log(email);
    this.userEmail = email;
  }

  transferPassword(password: string) {
    console.log(password);
    this.userPassword = password;
  }

  transferForm3(userName: string, tmdbKey: string, role: string) {
    this.userName = userName;
    this.tmdbKey = tmdbKey;
    this.role = role;
    this.setInfo();
  }

  setInfo() {
    this.user = {
      username: this.userName,
      password: this.userPassword,
      email: this.userEmail,
      role: this.role.toUpperCase(),
      tmdb_key: this.tmdbKey,
    };
    this.registerInfo(this.user);
    
  }

  registerInfo(user: User) {
    
  
    this.http.post(this.baseUrl + 'auth/signup', user ).subscribe();
    this.router.navigateByUrl("/signIn");
  }

  //signIn related code

  signIn(userEmail: string, userPassword: string) {
    this.http
      .post(
        this.baseUrl + 'auth/signin',
        { email: userEmail, password: userPassword },
        
      )
      .subscribe({
        next: (res) => {
          const decodedToken = this.jwtHelper.decodeToken(res['accessToken']);
             
          localStorage.setItem('token', res['accessToken']);

          this.currentUser.username = decodedToken.username;
          this.currentUser.role = res['role'];

          this.userBehave$.next(this.currentUser);
          this.router.navigateByUrl('/movies');
        },
        error: (error) => {
          
          if (error.status === 401) {
            this.loginError = true;
            this.errorBehave$.next(this.loginError);
            this.router.navigateByUrl('/signIn');
          }
        },
      });
  }

  // check if user is logged in

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  //logout

  logout() {
    localStorage.removeItem('token');

    this.currentUser = {};
    this.router.navigateByUrl('');
  }

  
}
