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
  movieId: string = '';
  movie!: singleMovie;
  trailerUrl: string = '';
  

  constructor(private movieService: MovieService) {
    this.movieService.clickedMovie$.subscribe(res => {
        if(res === ''){
          this.movieId = localStorage.getItem("movie");
        }else{
          this.movieId = res;
        }
      });

        this.storeId(this.movieId);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let selectedMovie = this.movieService.getOneMovie(this.movieId);
    let logo = this.movieService.getLogo(this.movieId);
    this.movieService.getTrailer(this.movieId).subscribe(res => res.results.every(el => {
        if(el.type === 'Trailer'){
          
          this.trailerUrl = el.key;
          return false
        }
        return true
      }));
   
    
    return forkJoin([selectedMovie,logo,this.trailerUrl]).pipe(
      map(res =>{
        return {
          movie: res[0],
          logo: res[1],
          trailer: this.trailerUrl

         

        }
      })
    )
}

storeId(id: string){
  localStorage.setItem("movie", id);
}

}
