import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CalanderService } from '../calander.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  year: number;
  month: number;
  private sub: any;
  data: object;

 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CalanderService

  ) {}

  ngOnInit() {

    this.sub = this.route.params
      .subscribe((params: Params) => {
     
        this.year = params['year']? +params['year']: new Date().getFullYear();
        this.month = params['month']?  +params['month']:new Date().getMonth()+1;
       this.data=this.service.getData(this.year,this.month);
    });
 
    console.log(this.data);
    

  }
    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
