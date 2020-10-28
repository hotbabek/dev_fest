import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'conferences',
    loadChildren: () => import('./conferences/conferences.module').then( m => m.ConferencesPageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then( m => m.SessionsPageModule)
  },
  {
    path: 'session-detail',
    loadChildren: () => import('./session-detail/session-detail.module').then( m => m.SessionDetailPageModule)
  },
  {
    path: 'speaker-detail',
    loadChildren: () => import('./speaker-detail/speaker-detail.module').then( m => m.SpeakerDetailPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./presentateurs/presentateurs.module').then( m => m.PresentateursPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
