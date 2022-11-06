import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { map, tap } from 'rxjs/operators';
import { Movie, Root } from './interfaces/moviedata';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieService } from 'src/app/core/movie-list services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit , OnDestroy {
  private imgUrl: string = 'https://image.tmdb.org/t/p/original';
  public movies = [];
  public page: number = 1;
  public scrolled: boolean = false;
  

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
 
   
    this.movieService.getPopMovies(this.page);
    this.movieService.popMovies$.subscribe((res) => (this.movies = res));

    //.subscribe((res) =>
    //   res.results.forEach((movie: Movie) => {
    //     this.movies.push({
    //       title: movie.title,
    //       pic: this.imgUrl + movie.poster_path,
    //       id: movie.id,
    //     });
    //   })
    // );
   
  }

  ngOnDestroy(): void {
    localStorage.setItem('page',this.page.toString());
  }

  onScroll() {
    this.page += 1;
    this.scrolled = true;

    this.movieService.getPopMovies(this.page);

    this.movieService.popMovies$.subscribe();
  }

  scrollToTop() {
    this.scrolled = false;

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  getId(clickedId: string){
   
      this.movieService.transferId(clickedId);
      
      
  }


}
