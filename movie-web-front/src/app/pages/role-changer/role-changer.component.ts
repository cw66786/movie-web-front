import { Component, OnInit } from '@angular/core';
import { FormServicesService } from 'src/app/core/auth-services/form-services.service';

@Component({
  selector: 'app-role-changer',
  templateUrl: './role-changer.component.html',
  styleUrls: ['./role-changer.component.scss'],
})
export class RoleChangerComponent implements OnInit {
  constructor(private service: FormServicesService) {}

  ngOnInit(): void {}

  transferNewRole(newRole: string) {
    this.service.updateRole(newRole);
  }
}
