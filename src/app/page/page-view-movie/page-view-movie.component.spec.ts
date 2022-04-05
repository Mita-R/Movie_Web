import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageViewMovieComponent } from './page-view-movie.component';

describe('PageViewMovieComponent', () => {
  let component: PageViewMovieComponent;
  let fixture: ComponentFixture<PageViewMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageViewMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageViewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
