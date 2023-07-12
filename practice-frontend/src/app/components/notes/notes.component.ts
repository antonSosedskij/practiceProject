import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interface/note';
import { NoteService } from 'src/app/service/note.service';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{

  notes: Note[] = []

  constructor(
    private noteService: NoteService
  ) {}


  ngOnInit(){
    // this.noteService.getNotes()
    //   .subscribe( data => {
    //     this.notes = data;
    //   });
  }


  deleteNote(id: number){
    this.noteService.deleteNote(id)
      .subscribe(() => {
        this.notes = this.notes.filter( note => {
          note.note_id !== id;
          window.location.reload();
        })
      });
  }

  completeNote(id: number){
    this.noteService.completeNote(id)
      .subscribe(() => {
        window.location.reload();
      })
  }

  receiveNotes(data: Note[]){
    this.notes = data;
  } 

  onNoteCreated(newEntry: Note): void {
    // Добавление новой записи в список
    this.notes.push(newEntry);
  }

}
