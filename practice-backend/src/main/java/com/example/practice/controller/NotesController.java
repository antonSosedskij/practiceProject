package com.example.practice.controller;

import com.example.practice.entity.Note;
import com.example.practice.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NotesService notesService;

//    @GetMapping()
//    @CrossOrigin(origins = "http://localhost:4200")
//    ResponseEntity<List<Note>> getNotes(){
//        return ResponseEntity.ok(notesService.findAllNotes());
//    }

    @GetMapping
    public ResponseEntity<List<Note>> getNotesByDate(
            @RequestParam String date
    ){
        return ResponseEntity.ok(notesService.findByCreationDate(date));
    }

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:4200")
    ResponseEntity<Note> addNote(
            @RequestBody Note note
    ){
        return ResponseEntity.ok(notesService.createNote(note));
    }


    @PutMapping(
            "/{noteId}"
    )
    public ResponseEntity<Note> updateUser(
            @PathVariable("noteId") Integer id
    )
    {
        return ResponseEntity.ok(notesService.completeNote(id));
    }

    @DeleteMapping(
            "/{noteId}"
    )
    public ResponseEntity<Void> deleteUser(
            @PathVariable("noteId")
                    Integer id
    ){
        notesService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }
}
