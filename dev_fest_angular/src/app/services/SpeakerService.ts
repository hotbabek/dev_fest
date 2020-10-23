import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpeakerService {
    private  speaker :Object=new Object;
    
	constructor(private http : HttpClient) {
        console.log("construct");
        
        // this.http.get(' https://devfest-nantes-2018-api.cleverapps.io/speakers').subscribe(response=>{
        //     if(response!=undefined){
        //         this.speaker=response;
        //     }    
        // })
    }
	;

	//getSpeaker() : Object{
        
    //     if(this.speaker== undefined){
    //         this.http.get(' https://devfest-nantes-2018-api.cleverapps.io/speakers').subscribe(response=>{    
    //             if(response!=undefined){
    //                 this.speaker=response;
    //             }            
                
    //         })
    //     }
	// 	return this.speaker;
	// }

}