import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './signIn.component';

const signInRoutes : Routes = [
  {path: '', component: SignInComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(signInRoutes)
    
  ],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
