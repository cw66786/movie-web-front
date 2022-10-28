import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Movie, Root } from '../interfaces/moviedata';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private popMovieUrl: string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private apiKey: string = 'abfded36c088b6b3b0e7e3e0b30e785c';
  private languageAndPage: string = '&language=en-US&page=';
  private imgUrl: string = 'https://image.tmdb.org/t/p/original';


  private movies = [];
  private popMoviesBehave$ = new BehaviorSubject(this.movies);
  popMovies$ = this.popMoviesBehave$.asObservable();

  constructor(private http: HttpClient) { }

  

  getPopMovies(page: number){
    return this.http.get<Root>(this.popMovieUrl+this.apiKey+this.languageAndPage + +page).subscribe((res) =>
     res.results.forEach((movie: Movie) => {
       this.movies.push({
         title: movie.title,
         pic: this.imgUrl + movie.poster_path,
         id: movie.id,
         rating: movie.vote_average,
       });
     })
   );

  }

}
