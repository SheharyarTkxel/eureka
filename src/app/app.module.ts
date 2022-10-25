import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IntiateBookingComponent } from './intiate-booking/intiate-booking.component';
import { AppRoutingModule } from './app-routing.module';
import { NavHeadComponent } from './nav-head/nav-head.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { ConstantService } from './AppConstant/constant.service';
import { AvailableServicesComponent } from './available-services/available-services.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    GoogleMapsModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [AppComponent, StarRatingComponent, LandingPageComponent, IntiateBookingComponent, NavHeadComponent, AvailableServicesComponent],
  bootstrap: [AppComponent],
  providers: [ConstantService]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot() {
    return {
      ngModule: AppModule,
      providers: [MatIconRegistry]
    }
  }
}
