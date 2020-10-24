import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {
   sessions=[]; 
  constructor(private http: HttpClient, private router : Router  ,  public navCtrl: NavController) { }

  ngOnInit() {
    
    
    this.http.get(' https://devfest-nantes-2018-api.cleverapps.io/sessions').subscribe((response ) => {
      let sessionsRaw = Object.values(response);
      let i=0;
      sessionsRaw.forEach(element => {
        this.sessions[i]= []
        
        if(element.titleMobile==undefined){
          this.sessions[i]["name"]=element.title;
        }else{
          this.sessions[i]["name"]=element.titleMobile;
        }
        this.sessions[i]["link"]="/session/"+element.id;
        this.sessions[i]["id"]=element.id;

        i++;
      });
    });
  }

  navigate(id : string){
    //this should be within a function
const navigationExtras: NavigationExtras = {
  queryParams: {
    id: JSON.stringify(id)
  }
};
this.navCtrl.navigateRoot(['/session'], 
navigationExtras);
  }

}
