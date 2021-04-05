import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion.component';
@NgModule({
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
  imports: [CommonModule, IonicModule, RouterModule]
})
export class AccordionComponentModule {}
