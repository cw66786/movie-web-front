import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './movie-list/movie-card/movie-card.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './signIn/signIn.component';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register-routing.module').then(
        (mod) => mod.RegisterRoutingModule
      ),
  },
  

  { path: 'selectedMovie', component: MovieCardComponent },
  { path: 'movies', component: MovieListComponent },

  { path: 'signIn', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
