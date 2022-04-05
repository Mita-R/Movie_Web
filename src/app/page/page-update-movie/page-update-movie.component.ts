import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-update-movie',
  templateUrl: './page-update-movie.component.html',
  styleUrls: ['./page-update-movie.component.css']
})
export class PageUpdateMovieComponent implements OnInit {
  id: any;

  constructor(private moviesService:MoviesService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    let sub : any = this.route.params.subscribe(params => {
      this.id= params['id'];
    });

    this.moviesService.getMovie(this.id).subscribe((res) => {
      console.log(res,"Movie to be updated");
      this.movieForm.patchValue({
        'movie_name':res[0].movie_name,
        'movie_description':res[0].movie_description,
        'movie_released_date':res[0].movie_released_date

      })
    })
  }

  movieForm = new FormGroup({
    'movie_name':new FormControl('',Validators.required),
    'movie_description':new FormControl('',Validators.required),
    'movie_released_date':new FormControl('',Validators.required),

  });

  movieUpdate() {
    console.log(this.movieForm.value,' Updated');
   
      this.moviesService.updateMovie(this.movieForm.value,this.id).subscribe((res) => {
        console.log(res,"Movie details updated");
        location.reload();
      })
    } 
  
}
