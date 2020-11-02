import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'whoWeAre',
    loadChildren: () => import('./pages/who-we-are/who-we-are.module').then(m => m.WhoWeAreModule)
  },
  {
    path: 'ourBusiness',
    loadChildren: () => import('./pages/our-business/our-business.module').then(m => m.OurBusinessModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
