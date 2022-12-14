import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsResolver } from 'src/app/core/movie-services-resolvers/movie-details.resolver';
import { MovieDetailsComponent } from './movie-details.component';

const movieDetailsRoutes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
    // runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(movieDetailsRoutes)],
  exports: [RouterModule],
})
export class MovieDetailsRoutingModule {}
