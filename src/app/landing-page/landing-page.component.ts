import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AvailableServicesComponent } from '../available-services/available-services.component';
import { MarkerType } from '../model/marker-type';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


   constructor(private dialog: MatDialog) { }
   // google maps zoom level
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  //@ViewChild(MatHorizontalStepper, {static:true}) stepper: MatHorizontalStepper;
  step1Completed = false;

  isLinear = true;
  display: google.maps.LatLngLiteral;
  markers: any[] = [];

  ngOnInit() {

  }

  complete() {

  }

  next() {

  }


  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
    this.markers = [];
    this.setMarker()
  }

  setMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },

      options: { animation: google.maps.Animation.BOUNCE },
    });
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
  
  
  showAvailableService() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    
    this.dialog.open(AvailableServicesComponent, dialogConfig);
   }
}