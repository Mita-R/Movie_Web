import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-page-add-movies',
  templateUrl: './page-add-movies.component.html',
  styleUrls: ['./page-add-movies.component.css']
})
export class PageAddMoviesComponent implements OnInit {
  erromsg: any;
  successmsg:any;

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
  }

  movieForm = new FormGroup({
    'movie_name':new FormControl('',Validators.required),
    'movie_description':new FormControl('',Validators.required),
    'movie_released_date':new FormControl('',Validators.required),
    'movie_image':new FormControl('',Validators.required),

  });

  movieSubmit() {
    if(this.movieForm.valid) {
      this.moviesService.addMovie(this.movieForm.value).subscribe((res)=>{
        console.log(res,"This is the movie I just added")
        this.movieForm.reset();
        this.successmsg = res.message;
      });
      console.log(this.movieForm.value)
    }else {

      this.erromsg = "All fields required";
    }

  }

}
