drop table if exists note cascade
drop sequence if exists note_seq
create sequence note_seq start with 1 increment by 50
create table note (
    is_done boolean not null,
    note_id integer not null,
    description varchar(255) not null,
    creation_date date,
    primary key (note_id)
    )