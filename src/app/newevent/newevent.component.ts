import { Component, Input, OnChanges,SimpleChange, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalanderService } from '../calander.service';
import { Observable } from 'rxjs/Observable';
import { EventService } from '../event.service';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {

 date: Date;
 private sub: any;
 constructor(
    private route: ActivatedRoute,
    private router: Router,
     private eventservice: EventService

  ) {}
  create_event(event) {
    var time =event.time.split(":");

    this.date.setHours(time[0]);
    this.date.setMinutes(time[1]);
    console.log(this.date);
    this.eventservice.create_event({
      title:event.title,
      details: event.details,
      date: this.date.toString()
    }
    );

  }

  ngOnInit() {
  this.sub = this.route.params.subscribe((params: Params) => {
     
     this.date=new Date(params['year'].toString(),params['month']-1,params['day'].toString());
   

    });

      console.log(this.date);
  }
     

}
