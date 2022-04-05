import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAddMoviesComponent } from './page/page-add-movies/page-add-movies.component';
import { PageDeleteMovieComponent } from './page/page-delete-movie/page-delete-movie.component';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { PageMyMoviesComponent } from './page/page-my-movies/page-my-movies.component';
import { PageUpdateMovieComponent } from './page/page-update-movie/page-update-movie.component';
import { PageViewMovieComponent } from './page/page-view-movie/page-view-movie.component';

const routes: Routes = [{path: 'home', component: PageHomeComponent},
{path: 'myMovies', component:PageMyMoviesComponent},
{path: 'viewMovie/:id', component:PageViewMovieComponent},
{path: 'addMovies', component:PageAddMoviesComponent},
{path: 'editMovie/:id', component:PageUpdateMovieComponent},
{path: 'removeMovie/:id', component:PageDeleteMovieComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
