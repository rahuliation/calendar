import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { CalenderComponent } from './calender/calender.component';
import { CalanderService } from './calander.service';
import { EventService } from './event.service';
import { NeweventComponent } from './newevent/newevent.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    NeweventComponent,
    EventComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
       { 
        path: 'newevent/:year/:month/:day', 
        component: NeweventComponent 
      },
       { 
        path: 'event/:id', 
        component: EventComponent 
      },
      { 
        path: ':year/:month', 
        component: CalenderComponent 
      },
       { 
        path: '', 
        component: CalenderComponent 
      }

    ])
  ],
  providers: [CalanderService,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
