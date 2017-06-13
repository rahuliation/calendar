import { Injectable } from '@angular/core';

@Injectable()
export class CalanderService {

  private year:number;
  private month:number;
  private dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
  private monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
  private dayPerMonth = [31,this.FebNumberOfDays(),31,30,31,30,31,31,30,31,30,31];
  constructor() { }

  private FebNumberOfDays() {
  if ( (this.year%100!=0) && (this.year%4==0) || (this.year%400==0)){
     return  29;
    }else{
      return 28;
    } 
  }
  private dayCreator(day_num:number){
    var days=[];
    for (var index = 0; index < day_num; index++) {
      days.push({
        date: new Date(this.year,this.month,index+1),
        day: index+1,
        day_of_week:new Date(this.year,this.month,index+1).getDay
      });
    }
    return days;

  }

    private blank_day_creator (day_num:number){
    var days=[];
    for (var index = 0; index < day_num; index++) {
      days.push({
        date: 0
      });
    }
    return days;

  }
 
  public getData(year:number, month:number) {
    this.year=year;
    this.month=month-1;
    var firstday=new Date(this.year,this.month,1).getDay();
    var days=this.dayCreator(this.dayPerMonth[this.month]);
    var blank_days=this.blank_day_creator(firstday);

    return {
      year:this.year,
      month:this.month,
      monthName: this.monthNames[this.month],
      monthNames: this.monthNames,
      dayNames:this.dayNames,
      dayPerMonth: this.dayPerMonth,
      firstday:firstday,
      days: days,
      blank_days:blank_days
      
    }

  }


}
