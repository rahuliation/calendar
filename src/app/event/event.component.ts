import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})


export class EventComponent implements OnInit {
  
  id:string;
  event:Event={} as any;
  date=new Date;
  public event_form: FormGroup; 

 constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventservice: EventService,
    private form_builder:FormBuilder
  ) {
  this.event_form = this.form_builder.group({
        title: [''],
        details:[''],
        time: ['']
    });

  }

  private get_event(id:string) {

    this.eventservice.get_event(id).subscribe((data)=> {
      this.event=data;
      this.date=new Date(data.date);
        var min=(this.date.getMinutes()/10>=1)? ":"+this.date.getMinutes():":0"+this.date.getMinutes();
      var hour=(this.date.getHours()/10>=1)? this.date.getHours():"0"+this.date.getHours();
    var time =hour+min;

    this.event_form.controls['title'].setValue(data.title);
      this.event_form.controls['details'].setValue(data.details );
        this.event_form.controls['time'].setValue(time);

    });

      
  }

  ngOnInit() {
      this.route.params.subscribe((params: Params) =>{
         this.id=params['id'];
         this.get_event(this.id);
     
     
        });


      
      
  }
    save(event) {

    var time =event.time.split(":");
    this.date.setHours(time[0]);
    this.date.setMinutes(time[1]);
    this.eventservice.update_event(this.id,{
      title:event.title,
      details: event.details,
      date: this.date.toString()
    }).subscribe((data)=>{
      
      this.router.navigate(['./'+this.date.getFullYear()+'/'+(this.date.getMonth()+1)]);

    },(err)=>
    {
      console.log(err);
    }
    
    
    );
       
    }

}

