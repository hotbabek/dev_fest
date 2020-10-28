import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss'],
})
export class PresentateursPage implements OnInit {
  speakers 
  constructor(private speakerService : SpeakerService, public navCtrl: NavController) { }

  ngOnInit() {
    this.speakerService.getSpeakerRequest().subscribe(response=>{
      
      this.speakers = Object.values(response);
      //this.speakers.push(response)
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
