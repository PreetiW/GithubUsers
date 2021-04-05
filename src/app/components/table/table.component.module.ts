import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, IonicModule, RouterModule]
})
export class TableComponentModule {}
