import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@features/calendar/calendar.module')
    .then( m => m.CalendarModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('@features/calendar/calendar.module')
    .then( m => m.CalendarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
