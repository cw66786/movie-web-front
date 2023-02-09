import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { SuperGuard } from './core/guards/super.guard';
import { MovieDetailsResolver } from './core/movie-services-resolvers/movie-details.resolver';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'changeRole',
    loadChildren: () =>
      import('./pages/role-changer/role-changer-routing.module').then(
        (mod) => mod.RoleChangerRoutingModule
      ),
  },

  {
    canActivate: [AdminGuard],
    path: 'movies',

    loadChildren: () =>
      import('./pages/movie-list/movie-list-routing.module').then(
        (mod) => mod.MovieListRoutingModule
      ),
  },
  {
    path: 'movie/:id',
    canActivate: [SuperGuard],
    loadChildren: () =>
      import('./pages/movie-details/movie-details-routing.module').then(
        (mod) => mod.MovieDetailsRoutingModule
      ),
    resolve: { movie: MovieDetailsResolver },
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
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
      useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
