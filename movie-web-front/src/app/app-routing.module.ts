import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  

  {
    path: 'selectedMovie',
    loadChildren: () =>
      import('./pages/movie-details/movie-details-routing.module').then(
        (mod) => mod.MovieDetailsRoutingModule
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movie-list/movie-list-routing.module').then(
        (mod) => mod.MovieListRoutingModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register-routing.module').then(
        (mod) => mod.RegisterRoutingModule
      ),
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('./pages/signIn/sign-in-routing.module').then(
        (mod) => mod.SignInRoutingModule
      ),
  },

  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
