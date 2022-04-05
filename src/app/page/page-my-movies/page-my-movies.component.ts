import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-page-my-movies',
  templateUrl: './page-my-movies.component.html',
  styleUrls: ['./page-my-movies.component.css']
})
export class PageMyMoviesComponent implements OnInit {
  
  constructor( private moviesService:MoviesService ) { }
  readMovies:any;
  ngOnInit(): void {
    this.getAllMovies();
  }

  deleteId(id:any) {
    console.log (id, "Id to be deleted");
    this.moviesService.deleteMovie(id).subscribe((res) =>{
      console.log(res,"movie id deleted");
      this.getAllMovies();
    
    });
  }

  getAllMovies() {
    this.moviesService.getMovies().subscribe((res) =>{
      console.log(res, "These are the movies");

      this.readMovies = res;
      console.log(res)
    });
  }

}
