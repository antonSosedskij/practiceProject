import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/interface/note';
import { NoteService } from 'src/app/service/note.service';

import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { FormatDatePipe } from 'src/app/pipe/format-date.pipe';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Output() dataEvent = new EventEmitter<Note[]>();

  // notesByDate: Note[] = [];

  daysOfWeek: string[] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  firstDayOfWeek: number = 1

  calendarDates: number[] = [];
  currentDate: Date = new Date();
  monthName = this.currentDate.toLocaleString('default', { month: 'long' });

  currentYear!: number;
  currentMonth!: number;

  constructor(
    private noteService: NoteService,
    private datePipe: DatePipe
  ) {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    this.updateCalendarDates();
  }


  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.updateCalendarDates();
    this.updateMonthName(); 
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.updateCalendarDates();
    this.updateMonthName(); 
  }

  updateCalendarDates():void {
    const firstDateOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const dayOfWeekOfFirstDate = firstDateOfMonth.getDay(); // День недели для первой даты месяца
  
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // Количество дней в текущем месяце
    const calendarDates: any[] = [];
  
    let columnIndex = (dayOfWeekOfFirstDate - this.firstDayOfWeek + 7) % 7; // Индекс столбца для первой даты
  
    const prevMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate(); // Количество дней в предыдущем месяце
  
    for (let i = 0; i < columnIndex; i++) {
      calendarDates.push(null);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDates.push(i); // Добавляем дни текущего месяца
    }
  
    // let nextMonthDay = 1;
    // while (calendarDates.length % 7 !== 0) {
    //   calendarDates.push(nextMonthDay++); // Добавляем дни следующего месяца
    // }
  
    this.calendarDates = calendarDates;
  }
  

  updateMonthName(): void {
    const monthNames = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Откябрь",
      "Ноябрь",
      "Декабрь"
    ];
    this.monthName = monthNames[this.currentMonth];
  }

  isCurrentMonth(date : number) : boolean {
    const currentDate = new Date(this.currentYear, this.currentMonth, date);
    return currentDate.getMonth() !== this.currentMonth;
  }

  onDateClick(date: any): void {
      const clickedDate = new Date(this.currentYear, this.currentMonth, date);
      let formatDate = this.datePipe.transform(clickedDate, 'yyyy-MM-dd');
      console.log(formatDate);
      
      this.noteService.getNotesByDate(formatDate!)
        .subscribe(data => {
          this.dataEvent.emit(data);
          console.log(data)
          formatDate = null;
        });
      
  }

  ngOnInit(){
    let date = new Date();
    let formatDate = this.datePipe.transform(date, 'yyyy-MM-dd');

    this.noteService.getNotesByDate(formatDate!)
      .subscribe( data => {
        this.dataEvent.emit(data);
        formatDate = null;
      } )
  }
  

}
