import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-view-movie',
  templateUrl: './page-view-movie.component.html',
  styleUrls: ['./page-view-movie.component.css']
})
export class PageViewMovieComponent implements OnInit {

  id:any
  readMovies: any;
  release: any;
  des: any;
  name: any;
  name2: any;


  constructor(private moviesService:MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let sub : any = this.route.params.subscribe(params => {
      this.id= params['id'];
    });

    

    this.moviesService.getMovie(this.id).subscribe((res) =>{
      console.log(res,"viewed specific movie");
      this.name = `${res[0].movie_name}`;
      this.des = `${res[0].movie_description}`;
      this.release = `${res[0].movie_released_date}`;

      this.name2 = `${this.name}`

      console.log("hello"+this.name)

    
    });
  }

}
