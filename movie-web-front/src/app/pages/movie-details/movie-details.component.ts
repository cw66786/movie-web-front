import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../movie-list/interfaces/moviedata';
import { singleMovie } from '../movie-list/interfaces/single-movie';
import { MovieService } from 'src/app/core/movie-services-resolvers/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieDetailsResolver } from 'src/app/core/movie-services-resolvers/movie-details.resolver';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  imgUrl: string = 'https://image.tmdb.org/t/p/original';
  trailerUrl: string = '';

  private movieId: string = '';
  movie!: singleMovie;
  logo: string = '';
  height: number = 315;
  width: number = 600;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const { movie, logo, trailer } = this.activatedRoute.snapshot.data['movie'];

    this.movie = movie;
    this.logo = this.imgUrl + logo.logos[0].file_path;
    this.trailerUrl = trailer;

    this.setYoutube();
  }

  setYoutube() {
    const screen = window.innerWidth;
    if (screen <= 620) {
      this.width = screen - 20;
      this.height = 0.525 * this.width;
    }
  }
}
