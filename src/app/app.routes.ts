import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    title: 'Inicio',
    loadComponent: () => import('./modules/home/home.component'),
  },
  {
    path: 'posiciones',
    title: 'Posiciones',
    loadComponent: () => import('./modules/positions/positions.component'),
  },
  {
    path: 'programacion',
    title: 'Programacion',
    loadComponent: () => import('./modules/programation/programation.component'),
  },
  {
    path: 'calendario',
    title: 'Calendario',
    loadComponent: () => import('./modules/calendar/calendar.component'),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component'),
  },
];
