import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {
  private sessions=[]; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("icis");
    
    this.http.get(' https://devfest-nantes-2018-api.cleverapps.io/sessions').subscribe((response ) => {
    let sessionsRaw = Object.values(response);
    console.log(sessionsRaw);
    let i=0;
    sessionsRaw.forEach(element => {
      this.sessions[i]= []
      console.log(element.titleMobile==undefined);
      
      if(element.titleMobile==undefined){
        this.sessions[i]["name"]=element.title;
      }else{
        this.sessions[i]["name"]=element.titleMobile;
      }
      this.sessions[i]["link"]="sessions/"+element.id;

      i++;
    });
    console.log(this.sessions);
    });
  }

}
