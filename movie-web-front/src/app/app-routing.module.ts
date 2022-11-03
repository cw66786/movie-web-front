import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardComponent } from './pages/movie-list/movie-card/movie-card.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/signIn/signIn.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then(
        (mod) => mod.PagesModule
      ),
  },
  

  
 
  // { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
