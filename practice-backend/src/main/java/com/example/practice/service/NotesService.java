package com.example.practice.service;

import com.example.practice.entity.Note;
import com.example.practice.repository.NoteRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@Data
public class NotesService {

    @Autowired
    private NoteRepository noteRepository;

    public List<Note> findAllNotes(){
        return StreamSupport.stream(noteRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Note createNote(Note note) {
        return noteRepository.save(note);
    }
}
