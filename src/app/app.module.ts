import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { CalenderComponent } from './calender/calender.component';
import { CalanderService } from './calander.service';
import { NeweventComponent } from './newevent/newevent.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    NeweventComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    RouterModule.forRoot([
       { 
        path: 'event/:date', 
        component: NeweventComponent 
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
  providers: [CalanderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
