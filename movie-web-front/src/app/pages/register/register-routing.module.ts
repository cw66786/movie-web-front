import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { RegisterComponent } from './register.component';

const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      { path: 'form3', component: FormThreeComponent },
      { path: 'form2', component: FormTwoComponent },
      { path: 'form1', component: FormOneComponent },
      { path: '', component: FormOneComponent },
    ],
  },
]


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(registerRoutes)
   
  ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
