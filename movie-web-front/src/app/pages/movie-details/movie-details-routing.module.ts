import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';


const movieDetailsRoutes: Routes = [
  { path: '', runGuardsAndResolvers: 'always', component: MovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(movieDetailsRoutes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }
