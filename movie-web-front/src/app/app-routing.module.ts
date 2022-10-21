import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signIn/signIn.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
