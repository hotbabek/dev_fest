import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentateursPage } from './presentateurs.page';

const routes: Routes = [
  {
    path: '',
    component: PresentateursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentateursPageRoutingModule {}
