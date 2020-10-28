import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SpeakerService } from 'src/app/services/speaker.service';
import { SessionsService } from 'src/app/services/sessions.service';

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
  private sessionID;

  constructor(private http : HttpClient,private router : Router , private activatedRoute : ActivatedRoute ,  public navCtrl: NavController,private speakerService : SpeakerService,
    private sessionsService : SessionsService) { }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params=>{
        if(params && params.id){
            this.sessionID = JSON.parse(params.id);                  
        }
      })
      this.setSessionNameAndDescription();
  }

  setSessionNameAndDescription(){
    this.sessionsService.getObservable().subscribe(response=>{
      console.log(response);
      
      this.name =response[this.sessionID].title;
      this.description=response[this.sessionID].description
      let hasNoDescription = this.description==undefined || this.description =="";
      if(hasNoDescription){
        this.description="Pas de description pour cette session";
      }

      if(response[this.sessionID].speakers!= undefined){
        this.setSpeakers(response[this.sessionID].speakers);
      }
      
    })
  }

  setSpeakers(speakers : []){
    console.log("ici");
    
    this.speakerService.getSpeakerRequest().subscribe(response =>{
      speakers.forEach(speaker=>{
        this.speakers.push(response[""+speaker].name)

        
      })
      
    })
  }
  
  navigate(id : string){
    console.log(id);
    
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
