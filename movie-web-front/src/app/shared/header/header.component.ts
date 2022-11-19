import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd , Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  
 
  constructor(public formService: FormServicesService, public router: Router) { }

  ngOnInit(): void {
   
  
   
   
   
  }
  

  

 
getName(){
  const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
  return decodedToken.username;
}

sendToChangeRole(){
  this.router.navigateByUrl('/changeRole')
}

  

}
