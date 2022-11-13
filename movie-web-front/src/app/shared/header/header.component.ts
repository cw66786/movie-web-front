import { Component, OnInit } from '@angular/core';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string = "cwilson";

  constructor(private formService: FormServicesService) { }

  ngOnInit(): void {
    this.formService.signInBehave$.subscribe(res => res === true ? this.isLoggedIn = true :  this.isLoggedIn = false);
  }

}
