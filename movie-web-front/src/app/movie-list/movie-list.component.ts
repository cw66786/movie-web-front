import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { map, tap } from 'rxjs/operators';
import { Movie, Root } from './interfaces/moviedata';

import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  private imgUrl: string = 'https://image.tmdb.org/t/p/original/';
  public movies = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopMovies(1).subscribe(res => 
      res.results.forEach((movie: Movie) => {
        this.movies.push(
        map((movie: Movie) => {
            const movieItem = {
                  title: movie.title,
                  pic: +this.imgUrl + +movie.poster_path,
                  id: movie.id

            }
           
           
        })
        )
      })
      )
  }

}
