import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EventService {
  private url="http://localhost:3000";
  constructor(
    private http: Http
  ) { }

  create_event( event) {

   return this.http.post(this.url+'/api/event/store',event)
   .map((response)=> response.json());

  }

 get_event( id) {
      return this.http.get(this.url+'/api/event/'+id)
   .map((response)=> response.json());
  }
  update_event(id,event){
     return this.http.put(this.url+'/api/event/update/'+id,event)
   .map((response)=> response.json());
  }

   delete_event( id) {
      return this.http.delete(this.url+'/api/event/'+id)
     .map((response)=> response.json());
  }

}
