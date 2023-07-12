import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {


  constructor(
    private datePipe: DatePipe
  ){}

  transform(value: Date) : Date {
    const formatDate = this.datePipe.transform(value, 'yyyy-MM-dd');
    console.log(formatDate);
    
    return new Date(formatDate!);
  }

}
