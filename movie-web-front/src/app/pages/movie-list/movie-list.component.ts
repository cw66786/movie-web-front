import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { map, tap } from 'rxjs/operators';
import { Movie, Root } from './interfaces/moviedata';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieService } from 'src/app/core/movie-services-resolvers/movie.service';
import { ScrollRestoreService } from 'src/app/core/movie-services-resolvers/scroll-restore.service';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, AfterViewInit, OnDestroy {
  private imgUrl: string = 'https://image.tmdb.org/t/p/original';
  public movies = [];
  public page: number = 1;
  public scrolled: boolean = false;

  constructor(
    private movieService: MovieService,
    private readonly router: Router,
    private readonly scrollService: ScrollRestoreService
  ) {}

  ngOnInit(): void {
    this.movieService.page$.subscribe((lastPage) =>
      lastPage >= 1 ? (this.page = lastPage + 1) : null
    );
    this.movieService.getPopMovies(this.page);
    this.movieService.popMovies$.subscribe((res) => (this.movies = res));
  }

  ngAfterViewInit(): void {
    const position = this.scrollService.scrollPosition;
    if(position > 0){
      window.scroll(0,position);
    }
  }

  ngOnDestroy(): void {
    this.movieService.keepPage(this.page);
    this.movieService.getPopMovies(this.page).unsubscribe();
    this.scrollService.setPosition(window.scrollY);
   
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
