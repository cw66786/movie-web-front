import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/moviedata';
import { singleMovie } from '../interfaces/single-movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  private movieId: string = '';
  movie: singleMovie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.clickedMovie$.subscribe(res => this.movieId = res);
    this.movieService.getOneMovie(this.movieId).subscribe(res => this.movie = res);
  }

}
