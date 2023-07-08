package com.example.practice.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "note")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "note_id", nullable = false)
    private Integer note_id;

    @Column(name = "description", nullable = false)
    public String description;

    @Column(name = "is_done", nullable = false)
    public boolean is_done;
}
