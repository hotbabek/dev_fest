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
  constructor(private speakerService : SpeakerService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params && params.id){
          this.speakerID = JSON.parse(params.id);                  
      }
    })

this.speakerService.getSpeakerRequest().subscribe(response=>{
  console.log(response[this.speakerID]);
  
})
  }

}
