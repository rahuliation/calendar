import { Injectable } from '@angular/core';

@Injectable()
export class CalanderService {

  private year:number;
  private month:number;
  
  constructor() { }

  private FebNumberOfDays() {
  if ( (this.year%100!=0) && (this.year%4==0) || (this.year%400==0)){
     return  29;
    }else{
      return 28;
    } 
  }
 
  public getData(year:number, month:number) {
    this.year=year;
    this.month=month-1;

var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
 var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
 var dayPerMonth = [31,this.FebNumberOfDays(),31,30,31,30,31,31,30,31,30,31] 

    return {
      year:this.year,
      month:this.month,
      monthNames: monthNames,
      dayNames:dayNames,
      dayPerMonth: dayPerMonth,
      
      
    }

  }


}
