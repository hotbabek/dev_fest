import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentateursPageRoutingModule } from './presentateurs-routing.module';

import { PresentateursPage } from './presentateurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentateursPageRoutingModule
  ],
  declarations: [PresentateursPage]
})
export class PresentateursPageModule {}
