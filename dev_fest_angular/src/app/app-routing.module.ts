import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    
  {
    path: '', loadChildren: './folder/conferences/conferences.module#ConferencesPageModule'
  },
  {
    path: 'Conferences', loadChildren: './folder/conferences/conferences.module#ConferencesPageModule'
  },
  {
    path: 'sessions', loadChildren: './folder/sessions/sessions.module#SessionsPageModule'
  },
  {
    path: 'session', loadChildren: './folder/session-detail/session-detail.module#SessionDetailPageModule'
  },
  {
    path: 'speaker', loadChildren: './folder/speaker-detail/speaker-detail.module#SpeakerDetailPageModule'
  },
  {
    path: 'Presentateurs', loadChildren: './folder/presentateurs/presentateurs.module#PresentateursPageModule'
  }
 
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
