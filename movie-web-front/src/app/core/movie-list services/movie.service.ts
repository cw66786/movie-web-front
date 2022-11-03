import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Images } from 'src/app/pages/movie-list/interfaces/images';

import { Movie, Root } from '../../pages/movie-list/interfaces/moviedata';
import { singleMovie } from '../../pages/movie-list/interfaces/single-movie';
import { Videos } from '../../pages/movie-list/interfaces/videos';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl: string = 'https://api.themoviedb.org/3/movie/';

  private apiUrl: string = '?api_key=';
  private apiKey: string = 'abfded36c088b6b3b0e7e3e0b30e785c';
  private languageAndPage: string = '&language=en-US&page=';
  private imgUrl: string = 'https://image.tmdb.org/t/p/original';

  private movies = [];
  private popMoviesBehave$ = new BehaviorSubject(this.movies);
  popMovies$ = this.popMoviesBehave$.asObservable();

  private singleMovie = '';
  private singleBehave$ = new BehaviorSubject(this.singleMovie);
  clickedMovie$ = this.singleBehave$.asObservable();


  


  constructor(private http: HttpClient) {}

  getPopMovies(page: number) {
    return this.http
      .get<Root>(
        this.baseUrl +
          'popular' +
          this.apiUrl +
          this.apiKey +
          this.languageAndPage +
          +page
      )
      .subscribe((res) =>
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

  getOneMovie(movieId: string) {
    return this.http.get<singleMovie>(
      this.baseUrl + movieId + this.apiUrl + this.apiKey
    );
  }

  transferId(clickedId: string) {
    this.singleMovie = clickedId;
    this.singleBehave$.next(this.singleMovie);
  }

  getLogo(id: string) {
    return this.http.get<Images>(
      this.baseUrl + id + '/images' + this.apiUrl + this.apiKey + '&language=en'
    );
  };


  getTrailer(id: string){
    return this.http.get<Videos>(this.baseUrl + id + '/videos' + this.apiUrl + this.apiKey + '&language=en');
  }
}
