import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private sessions = [];

  private requestObservable : Observable<Object>;

  constructor(private http : HttpClient) {    
    this.requestObservable = this.http.get('https://devfest-nantes-2018-api.cleverapps.io/sessions')    
   }

   async getSession(){
    const t = await  this.http.get('https://devfest-nantes-2018-api.cleverapps.io/sessions').toPromise();
     this.sessions=Object.values(t);
     console.log(this.sessions);
     
   }

   getSessionName(idToFind : string) : string{
    //if(this.sessions==undefined)
    return this.sessions[idToFind].name;    
   }

   getSessionDescription(idToFind : string) : string{
    let description="Pas de description possible";
    this.sessions.forEach(element=>{       
      if(element.id==idToFind){        
       description = element.description;   
     }
    })    
    return description;    
  }

  public getObservable(){
    return this.requestObservable;
  }

}
