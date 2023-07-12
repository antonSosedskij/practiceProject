import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../interface/note';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NoteCreate } from '../interface/note-create';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }


  getNotesByDate(date: String) : Observable<Note[]>{
    let apiUrl = `${this.API_URL}notes?date=${date}`;
    return this.http.get<Note[]>(apiUrl);
  }

  createNote(note: NoteCreate) : Observable<Note> {
    let apiUrl = `${this.API_URL}notes`;
    return this.http.post<Note>(apiUrl, note);
  }

  deleteNote(id: number) : any{
    let apiUrl = `${this.API_URL}notes/${id}`;
    return this.http.delete(apiUrl);
  }

  completeNote(id: number) : Observable<Note> {
    let apiUrl = `${this.API_URL}notes/${id}`;
    return this.http.put<Note>(apiUrl, null);
  }
}
