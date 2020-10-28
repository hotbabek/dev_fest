import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class SpeakerService {

  private speakers = [];
  private requestObservable : Observable<Object>;


  constructor(private http : HttpClient) {
    this.requestObservable = this.http.get('https://devfest-nantes-2018-api.cleverapps.io/speakers')    
   }

   getSpeakers(){
      return this.speakers;
   }

   getSpeakerRequest(): Observable<Object>{
     return this.requestObservable;
   }

   findSpeaker(id : string){
     for(let i = 0 ; i < this.speakers.length ;i++){
       if(this.speakers[i].id==id){
          return this.speakers[i];
       }
     }
   }
}
