import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { CalenderComponent } from './calender/calender.component';
import { CalanderService } from './calander.service';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: CalenderComponent 
      },
      { 
        path: ':year/:month', 
        component: CalenderComponent 
      }

    ])
  ],
  providers: [CalanderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
