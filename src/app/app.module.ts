import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMyMoviesComponent } from './page/page-my-movies/page-my-movies.component';
import { PageAddMoviesComponent } from './page/page-add-movies/page-add-movies.component';
import { PageViewMovieComponent } from './page/page-view-movie/page-view-movie.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageUpdateMovieComponent } from './page/page-update-movie/page-update-movie.component';
import { PageDeleteMovieComponent } from './page/page-delete-movie/page-delete-movie.component';


const routes: Routes = [{path: '/home', component: PageHomeComponent},
{path: 'myMovies', component:PageMyMoviesComponent},
{path: 'viewMovie', component:PageViewMovieComponent},
{path: 'addMovies', component:PageAddMoviesComponent}];

@NgModule({
  declarations: [
    AppComponent,
    PageMyMoviesComponent,
    PageAddMoviesComponent,
    PageViewMovieComponent,
    PageHomeComponent,
    PageUpdateMovieComponent,
    PageDeleteMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
