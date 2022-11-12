import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServicesService {

  constructor(private http: HttpClient) { }

  checkEmail(userEmail: string){
    const url = 'http://localhost:4231/auth/check-email';

    return this.http.post(url,{email: userEmail});

  }


}
