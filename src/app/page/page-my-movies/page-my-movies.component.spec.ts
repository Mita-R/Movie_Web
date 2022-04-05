import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyMoviesComponent } from './page-my-movies.component';

describe('PageMyMoviesComponent', () => {
  let component: PageMyMoviesComponent;
  let fixture: ComponentFixture<PageMyMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMyMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
