import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/moviedata';
import { singleMovie } from '../interfaces/single-movie';
import { MovieService } from '../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
   imgUrl: string = 'https://image.tmdb.org/t/p/original';
   trailerUrl: string = 'https://www.youtube.com/embed/';
  private movieId: string = '';
  movie!: singleMovie;
  logo: string = '';
  
  safeTrailer: SafeResourceUrl;

  constructor(private movieService: MovieService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.movieService.clickedMovie$.subscribe(res => this.movieId = res);
    this.movieService.getOneMovie(this.movieId).subscribe(res => this.movie = res);
    this.movieService.getLogo(this.movieId).subscribe(res => this.logo = this.imgUrl + res.logos[0].file_path);
    this.movieService.getTrailer(this.movieId).subscribe(res => res.results.every(el => {
      if(el.type === 'Trailer'){
        
        this.safeTrailer = this.getSafeUrl(this.trailerUrl + el.key);
        return false
      }
      return true
    }));
   
  }

  getSafeUrl(url: string) {
    console.log(url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}

}
