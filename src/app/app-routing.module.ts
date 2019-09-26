import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentComponent } from './appointment/appointment.component';
import { BillComponent } from './bill/bill.component';
import { PatientComponent } from './patient/patient.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path : 'appointments', component: AppointmentComponent},
  { path : 'billing', component: BillComponent},
  { path : 'patients', component: PatientComponent},
  { path : 'dashboard', component: LandingComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
