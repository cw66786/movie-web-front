import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  TitleStrategy,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { FormServicesService } from '../auth-services/form-services.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  private role!: string;

  constructor(private router: Router, private service: FormServicesService) {
    this.service.currentUser$.subscribe((res) => (this.role = res.role));
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.role === 'ADMIN' || this.role === 'SUPERUSER') {
      return true;
    } else {
      this.router.navigateByUrl('/changeRole');
      return false;
    }
  }
}
