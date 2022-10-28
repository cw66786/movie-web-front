import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Root } from '../interfaces/moviedata';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private popMovieUrl: string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  private apiKey: string = 'abfded36c088b6b3b0e7e3e0b30e785c';
  private languageAndPage: string = '&language=en-US&page=';


  // private popMovies = {};
  // private popMoviesBehave$ = new BehaviorSubject(this.popMovies);
  // popMovies$ = this.popMoviesBehave$.asObservable();

  constructor(private http: HttpClient) { }

  

  getPopMovies(page: number){
    return this.http.get<Root>(this.popMovieUrl+this.apiKey+this.languageAndPage + +page);

  }

}
