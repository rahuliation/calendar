import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class EventService {

  constructor(
    private http: Http
  ) { }

  create_event( event) {
    console.log(event.date);

   return this.http.post('http://localhost:3000/api/event/store',event)
   .switchMap((response)=> response.json()).subscribe((data)=> console.log(data));

  }

}
