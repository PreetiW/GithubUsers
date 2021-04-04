import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/search-user/search-user.module').then( m => m.SearchUserPageModule)
  },
  {
    path: 'search-user',
    loadChildren: () => import('./pages/search-user/search-user.module').then( m => m.SearchUserPageModule)
  },
  {
    path: 'repo-details',
    loadChildren: () => import('./pages/repo-details/repo-details.module').then( m => m.RepoDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
