import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },
  {
    path: 'tratamientos',
    loadComponent: () => import('./tratamientos/tratamientos.page').then( m => m.TratamientosPage)
  },  {
    path: 'aboutme',
    loadComponent: () => import('./aboutme/aboutme.page').then( m => m.AboutmePage)
  },
  {
    path: 'turnos',
    loadComponent: () => import('./turnos/turnos.page').then( m => m.TurnosPage)
  },

];
