import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalanderService } from '../calander.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import  socket_connection from 'socket.io-client';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  year: number;
  month: number;
  private sub: any;
  data:any;
  

 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CalanderService

  ) {}



  connectSocket() {
   var socket=socket_connection('http://localhost:3000');  
 this.data=this.service.getData(this.year,this.month);
        socket.on('make update',(data)=>{
          socket.emit('update_event_req',{})
        });
        socket.on('update_event_res', (data)=> {
        this.data.days.forEach(day => {
          day.events=[];
        });
        data.events.sort((a,b) => new Date(a.date).getTime()-new Date(b.date).getTime());
        data.events.forEach(event => {
          var event_date=new Date(event.date);
          if(event_date.getFullYear()==this.year && event_date.getMonth()==this.month-1)
          {
          let date=event_date.getDate();
          this.data.days[date-1].events.push(event);

          }
        
        });
      });
  }

  today(day){
    var date=new Date(day);
    var today=new Date();
    return date.getDate()==today.getDate() && date.getMonth()==today.getMonth()&&date.getFullYear()==today.getFullYear();
  }

  ngOnInit() {

    this.sub = this.route.params
      .subscribe((params: Params) => {
     
        this.year = params['year']? +params['year']: new Date().getFullYear();
        this.month = params['month']?  +params['month']:new Date().getMonth()+1;
          this.connectSocket();
    });
  }
    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
