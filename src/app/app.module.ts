import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//my modules
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material-module/custom-material.module'

//my components
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BillComponent } from './bill/bill.component';
import { LandingComponent } from './landing/landing.component';
import { PatientComponent } from './patient/patient.component';
import { MyNavComponent } from './my-nav/my-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    BillComponent,
    LandingComponent,
    PatientComponent,
    MyNavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
