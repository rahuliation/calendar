import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalanderService } from '../calander.service';
import { Observable } from 'rxjs/Observable';

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
  

  ) {}

  ngOnInit() {
  this.sub = this.route.params.subscribe((params: Params) => {
     
     this.date=new Date(""+params['date']);
   

    });

      console.log(this.date);
  }
     

}
