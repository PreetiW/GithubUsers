import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepoDetailsPageRoutingModule } from './repo-details-routing.module';

import { RepoDetailsPage } from './repo-details.page';
import { AccordionComponentModule } from 'src/app/components/accordion/accordion.component.module';
import { TableComponentModule } from 'src/app/components/table/table.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionComponentModule,
    TableComponentModule,
    RepoDetailsPageRoutingModule
  ],
  declarations: [RepoDetailsPage]
})
export class RepoDetailsPageModule {}
