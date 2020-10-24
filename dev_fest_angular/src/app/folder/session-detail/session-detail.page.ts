import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.page.html',
  styleUrls: ['./session-detail.page.scss'],
})

export class SessionDetailPage implements OnInit {
   session=[];
   speakers=[];
  name : string ="";
  description : string ="";

  constructor(private http : HttpClient,private router : Router , private activatedRoute : ActivatedRoute ,  public navCtrl: NavController) { }

  ngOnInit() {
    this.http.get(' https://devfest-nantes-2018-api.cleverapps.io/sessions').subscribe((response ) =>{
      

      let sessionsRaw = Object.values(response);
      this.activatedRoute.queryParams.subscribe(params=>{        
          if(params && params.id){
            let id = JSON.parse(params.id);
            let sessionRaw =sessionsRaw.find(element=>element.id==id);
            console.log(sessionRaw);

            //Session
            this.session["name"]=sessionRaw.title;
            this.name = sessionRaw.title
            this.session["description"]=sessionRaw.description;
            this.description=sessionRaw.description
            if(this.session["description"]==undefined){
              this.session["description"]="Pas de description pour cette session";
            }
            this.session["speakers"]=""+sessionRaw.speakers;

            
          }else{
            console.log("pas de qes");
            
          }
      }); 
      
    });
    console.log("session :");
                console.log(this.session);
    this.http.get(' https://devfest-nantes-2018-api.cleverapps.io/speakers').subscribe((response ) =>{
      
      let speakersRaw = Object.values(response);
      console.log(speakersRaw);

      //Speakers
      let i=0;
      speakersRaw.forEach(element => {
        if(this.session["speakers"].includes(element.id)){
          this.speakers[i]= []
          this.speakers[i]["img"]=element.photoUrl;
          this.speakers[i]["name"]=element.name;
          i++;
        }
      });
      console.log(this.speakers);
    });
  }
  
  navigate(id : string){
    //this should be within a function
const navigationExtras: NavigationExtras = {
  queryParams: {
    id: JSON.stringify(id)
  }
};
this.navCtrl.navigateRoot(['/speaker'], 
navigationExtras);
  }

}
