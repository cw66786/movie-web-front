import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormOneComponent } from './form-one/form-one.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {path: '', component: RegisterComponent,
  children: [
  {path: 'form3', component: FormThreeComponent},
  {path: 'form2', component: FormTwoComponent},
  {path: 'form1', component: FormOneComponent},
  ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule]
  
})
export class RegisterRoutingModule { }
