import { TestBed } from '@angular/core/testing';

import { MovieDetailsResolver } from './movie-details.resolver';

describe('MovieDetailsResolver', () => {
  let resolver: MovieDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MovieDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
