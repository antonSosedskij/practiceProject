package com.example.practice.service;

import com.example.practice.DTOs.NoteUpdateDto;
import com.example.practice.entity.Note;
import com.example.practice.repository.NoteRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    public void deleteNote(Integer id){
        noteRepository.deleteById(id);
    }

    public Note completeNote(Integer id){
        Note note = noteRepository.findById(id).get();
        note.set_done(!note.is_done());
        return noteRepository.save(note);
    }

    public List<Note> findByCreationDate(String date){
        Date formatDate = getFormatDate(date);
        return StreamSupport.stream(noteRepository.findAllByCreationDate(formatDate).spliterator(), false)
                .collect(Collectors.toList());
    }

    private Date getFormatDate(String date){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try{
            return format.parse(date);
        }
        catch (ParseException e){
            e.printStackTrace();
        }
        return null;
    }
}
