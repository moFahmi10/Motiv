import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookingComponent } from './views/booking/booking.component';
import { CarComponent } from './components/car/car.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Chart2Component } from './chart2/chart2.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    BookingComponent,
    CarComponent,
    ChartComponent,
    DashboardComponent,
    Chart2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
