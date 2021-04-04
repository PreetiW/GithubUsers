import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoDetailsPage } from './repo-details.page';

const routes: Routes = [
  {
    path: '',
    component: RepoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoDetailsPageRoutingModule {}
