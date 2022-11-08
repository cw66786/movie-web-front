import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../movie-list/interfaces/moviedata';
import { singleMovie } from '../movie-list/interfaces/single-movie';
import { MovieService } from 'src/app/core/movie-list services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieDetailsResolver } from 'src/app/core/movie-list services/movie-details.resolver';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  imgUrl: string = 'https://image.tmdb.org/t/p/original';
  trailerUrl: string = '';
  //  'https://www.youtube.com/embed/';
  private movieId: string = '';
  movie!: singleMovie;
  logo: string = '';

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((res) => {
    //   this.movie = res['movie'].movie;
    //   this.logo = this.imgUrl + res['movie'].logo.logos[0].file_path;
    //   this.trailerUrl = res['movie'].trailer;
    //   console.log(res['movie']);
    // });

    const res = this.activatedRoute.snapshot.data['movie'];

    console.log('from resolver: ', res);
    console.log('url: ~~', this.imgUrl + res['movie'].logo.logos[0].file_path);
    // this.movie = res['movie'].movie;
    // this.logo = this.imgUrl + res['movie'].logo.logos[0].file_path;
    // this.trailerUrl = res['movie'].trailer;
    // console.log(res['movie']);




    // this.movieService.clickedMovie$.subscribe(res => {
    //   if(res === ''){
    //     this.movieId = localStorage.getItem("movie");
    //   }else{
    //     this.movieId = res;
    //   }

    // });
    // this.movieService.getOneMovie(this.movieId).subscribe(res => this.movie = res);
    // this.movieService.getLogo(this.movieId).subscribe(res => this.logo = this.imgUrl + res.logos[0].file_path);
    // this.movieService.getTrailer(this.movieId).subscribe(res => res.results.every(el => {
    //   if(el.type === 'Trailer'){

    //     this.trailerUrl = el.key;
    //     return false
    //   }
    //   return true
    // }));

    // this.storeId(this.movieId);
  }
}
