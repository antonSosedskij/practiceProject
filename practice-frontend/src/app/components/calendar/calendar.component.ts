import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  daysOfWeek: string[] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  firstDayOfWeek: number = 1

  calendarDates: number[] = [];
  currentDate: Date = new Date();
  monthName = this.currentDate.toLocaleString('default', { month: 'long' });

  currentYear!: number;
  currentMonth!: number;

  constructor() {
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
    const calendarDates: number[] = [];
  
    let columnIndex = (dayOfWeekOfFirstDate - this.firstDayOfWeek + 7) % 7; // Индекс столбца для первой даты
  
    const prevMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate(); // Количество дней в предыдущем месяце
  
    for (let i = columnIndex - 1; i >= 0; i--) {
      calendarDates.push(prevMonthDays - i); // Добавляем дни предыдущего месяца
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDates.push(i); // Добавляем дни текущего месяца
    }
  
    let nextMonthDay = 1;
    while (calendarDates.length % 7 !== 0) {
      calendarDates.push(nextMonthDay++); // Добавляем дни следующего месяца
    }
  
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
  

}
