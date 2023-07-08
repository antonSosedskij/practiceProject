package com.example.practice.controller;

import com.example.practice.entity.Note;
import com.example.practice.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
public class NotesController {

    @Autowired
    private NotesService notesService;

    @GetMapping()
    @CrossOrigin(origins = "http://localhost:4200")
    ResponseEntity<List<Note>> getNotes(){
        return ResponseEntity.ok(notesService.findAllNotes());
    }

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:4200")
    ResponseEntity<Note> addNote(
            @RequestBody Note note
    ){
        return ResponseEntity.ok(notesService.createNote(note));
    }
}
