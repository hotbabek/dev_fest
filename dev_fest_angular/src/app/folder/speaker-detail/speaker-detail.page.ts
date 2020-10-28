import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.page.html',
  styleUrls: ['./speaker-detail.page.scss'],
})
export class SpeakerDetailPage implements OnInit {
  name;
  speakerID;
  private imgURL ="https://devfest2018.gdgnantes.com/";
  imageLink;
  shortBio;
  constructor(private speakerService : SpeakerService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.id){
          this.speakerID = JSON.parse(params.id);                  
      }
    })

    this.setSpeakerInfo()
  }

  setSpeakerInfo(){
    this.speakerService.getSpeakerRequest().subscribe(response=>{
      this.name = response[this.speakerID].name
      if(response[this.speakerID].photoUrl!= undefined){
        this.imageLink =this.imgURL+ response[this.speakerID].photoUrl
      }
      if(response[this.speakerID].shortBio!= undefined){
        this.shortBio=response[this.speakerID].shortBio
      }
      
      console.log( response[this.speakerID]);
    })
  }
}
