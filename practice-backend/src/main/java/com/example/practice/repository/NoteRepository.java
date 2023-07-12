package com.example.practice.repository;

import com.example.practice.entity.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface NoteRepository extends CrudRepository<Note, Integer> {
    List<Note> findAllByCreationDate(Date date);
}
