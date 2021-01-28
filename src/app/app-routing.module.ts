import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' }
  },
  {
    path: 'whoWeAre',
    loadChildren: () => import('./pages/who-we-are/who-we-are.module').then(m => m.WhoWeAreModule),
    data: { title: 'Who we Are' }
  },
  {
    path: 'ourBusiness',
    loadChildren: () => import('./pages/our-business/our-business.module').then(m => m.OurBusinessModule),
    data: { title: 'Our Business' }
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
    data: { title: 'Contract' }
  },
  {
    path: 'careers',
    loadChildren: () => import('./pages/careers/careers.module').then(m => m.CareersModule),
    data: { title: 'Careers' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
