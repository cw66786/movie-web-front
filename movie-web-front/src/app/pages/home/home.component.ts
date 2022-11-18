import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private role: string;

  constructor(private service: FormServicesService, private router: Router) { }

  ngOnInit(): void {
    this.service.currentUser$.subscribe(res => this.role = res.role);
    
    if(this.service.isLoggedIn() && this.role !== 'USER' ){
      this.router.navigateByUrl('/movies');
    }
  }

}
