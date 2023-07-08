import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interface/note';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }


  getNotes() : Observable<Note[]>{
    let apiUrl = `${this.API_URL}notes`;
    return this.http.get<Note[]>(apiUrl);
  }
}
