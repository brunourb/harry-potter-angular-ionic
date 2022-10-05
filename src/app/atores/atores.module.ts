import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtoresPageRoutingModule } from './atores-routing.module';

import { AtoresPage } from './atores.page';
import { HttpClientModule } from '@angular/common/http';
import { AtoresService } from '../api/atores.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    AtoresPageRoutingModule
  ],
  declarations: [AtoresPage],
  providers: [AtoresService]
})
export class AtoresPageModule {}
