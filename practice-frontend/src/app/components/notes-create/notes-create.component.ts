import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteCreate } from 'src/app/interface/note-create';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.scss']
})
export class NotesCreateComponent {


  noteForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(15)
    ]),
    
  });

  constructor(
    private noteService: NoteService
  ){}

  onSubmit(form: FormGroup){
    let note: NoteCreate = {
      description: form.value.description,
      is_done: false,
      creationDate: new Date()
    }
    this.noteService.createNote(note)
      .subscribe(() => {
        window.location.reload();
      })
  }

}
