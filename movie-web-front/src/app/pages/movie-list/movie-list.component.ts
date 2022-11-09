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
export class MovieListComponent implements OnInit, OnDestroy {
  private imgUrl: string = 'https://image.tmdb.org/t/p/original';
  public movies = [];
  public page: number = 1;
  public scrolled: boolean = false;

  constructor(
    private movieService: MovieService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.movieService.page$.subscribe((lastPage) =>
      lastPage >= 1 ? (this.page = lastPage + 1) : null
    );
    this.movieService.getPopMovies(this.page);
    this.movieService.popMovies$.subscribe((res) => (this.movies = res));
  }

  ngOnDestroy(): void {
    this.movieService.keepPage(this.page);
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
  }

  getId(clickedId: string) {
    // this.movieService.transferId(clickedId);
    const url = `/movie/${clickedId}`;
    this.router.navigate([url]);
   
  }


  
}
