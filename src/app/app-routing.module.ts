import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '@core/pages/calendar/calendar.component';
import { Top100 } from '@core/pages/top100/top100.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'top100', component: Top100 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
