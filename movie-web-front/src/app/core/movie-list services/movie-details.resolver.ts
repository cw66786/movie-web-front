import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { forkJoin, map, Observable, of, withLatestFrom } from 'rxjs';
import { singleMovie } from 'src/app/pages/movie-list/interfaces/single-movie';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsResolver implements Resolve<any> {
  movieId: string;
  movie!: singleMovie;
  trailerUrl: string = '';

  constructor(private movieService: MovieService) {}

  resolve(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // this.movieService.clickedMovie$.subscribe((res) =>
    //   res === ''
    //     ? (this.movieId = localStorage.getItem('movieId'))
    //     : (this.movieId = res)
    // );

    const id = activatedRoute.params['id'];
    let selectedMovie$ = this.movieService.getOneMovie(id);
    let logo$ = this.movieService.getLogo(id);

    this.movieService.getTrailer(id).subscribe((res) => {
      const trailer = res.results.find(ele => ele.type === 'Trailer');
      this.trailerUrl = trailer.key;
    }
      // res.results.every((el) => {
      //   if (el.type === 'Trailer') {
      //     this.trailerUrl = el.key;
      //     return false;
      //   }
      //   return true;
      // })
    );

    return forkJoin([selectedMovie$, logo$, this.trailerUrl]).pipe(
      map((res) => {
        return {
          movie: res[0],
          logo: res[1],
          trailer: this.trailerUrl,
        };
      })
    );
  }
}
