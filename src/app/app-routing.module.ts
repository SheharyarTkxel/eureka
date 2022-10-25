import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntiateBookingComponent } from './intiate-booking/intiate-booking.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
	{path: '', redirectTo: 'landing', pathMatch: 'full'},
	{path: 'landing', component: LandingPageComponent},
	{path: 'booking', component: IntiateBookingComponent},
	{path: 'booking/:id', component: IntiateBookingComponent},

	// {path: '404', component: PageNotFoundComponent},
	// {path: '**', component: PageNotFoundComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
