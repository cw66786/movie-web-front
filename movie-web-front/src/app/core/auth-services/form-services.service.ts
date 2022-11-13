import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, map, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FormServicesService {
  private baseUrl = 'http://localhost:4231/';
  private userEmail: string;
  private userPassword: string;
  private userName: string;
  private tmdbKey: string;
  private role: string;
  private user: User;

  signedIn: boolean = false;
  signInBehave$ = new BehaviorSubject(this.signedIn);
  signedIn$ = this.signInBehave$.asObservable();


  constructor(private http: HttpClient) { }


  checkEmail(userEmail: string){

    return this.http.post(this.baseUrl+ 'auth/check-email',{email: userEmail});

  }

  //register related code

  transferEmail(email: string){
    console.log(email)
    this.userEmail = email;
  }
  
  
  transferPassword(password: string){
    console.log(password)
    this.userPassword = password;
  }

  tranferForm3(userName: string,tmdbKey: string, role: string){
    
    this.userName = userName;
    this.tmdbKey = tmdbKey;
    this.role = role;
    this.setInfo();

  }

  setInfo(){
    this.user ={
      username: this.userName,
      password: this.userPassword,
      email: this.userEmail,
      role: this.role.toUpperCase(),
      tmdb_key: this.tmdbKey,

    }
    this.registerInfo(this.user);
  }


  registerInfo(user: User){

    this.http.post(this.baseUrl + '/auth/signup',{user});

  }


  //signIn related code

  signIn(userEmail: string, userPassword: string){
    this.http.post(this.baseUrl + '/auth/signin',{email: userEmail,password: userPassword});
    this.signedIn = true;
    this.signInBehave$.next(this.signedIn);
  }

}
