package com.example.practice.DTOs;

import com.example.practice.entity.Note;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NoteUpdateDto {

    private String description;
    private boolean is_done;

    public static NoteUpdateDto toModel(Note noteEntity){
        NoteUpdateDto note = new NoteUpdateDto();
        note.setDescription(noteEntity.getDescription());
        note.set_done(noteEntity.is_done());

        return note;
    }
}
