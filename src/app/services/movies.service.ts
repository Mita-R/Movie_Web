import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  getMovies():Observable<any> {
   return this.http.get(`${this.baseUrl}/movie`)
  }

  getMovie(id:any):Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}`)
   }

  addMovie(data:any):Observable<any> {
    console.log(data,"ADDED A MOVIE")
    return this.http.post(`${this.baseUrl}/addmovie`,data);
  }

  deleteMovie(id:any):Observable<any> {
    return this.http.delete(`${this.baseUrl}/movie/${id}`);
  }

  updateMovie(data:any,id:any):Observable<any> {
    return this.http.put(`${this.baseUrl}/updatemovie/${id}`,data);
  }
}
