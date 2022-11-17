import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleChangerComponent } from './role-changer.component';

const routes: Routes = [
  {path:'',component: RoleChangerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleChangerRoutingModule { }
