import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatDatePipe } from './pipe/format-date.pipe';
import { DatePipe} from '@angular/common';
import { NotesCreateComponent } from './components/notes-create/notes-create.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CalendarComponent,
    FormatDatePipe,
    NotesCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    FormatDatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
