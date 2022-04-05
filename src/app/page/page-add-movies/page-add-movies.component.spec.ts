import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddMoviesComponent } from './page-add-movies.component';

describe('PageAddMoviesComponent', () => {
  let component: PageAddMoviesComponent;
  let fixture: ComponentFixture<PageAddMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
