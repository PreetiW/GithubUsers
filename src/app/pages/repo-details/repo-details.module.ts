import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepoDetailsPageRoutingModule } from './repo-details-routing.module';

import { RepoDetailsPage } from './repo-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepoDetailsPageRoutingModule
  ],
  declarations: [RepoDetailsPage]
})
export class RepoDetailsPageModule {}
