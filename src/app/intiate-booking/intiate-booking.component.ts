import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantService } from '../AppConstant/constant.service';
import { MarkerType } from '../model/marker-type';



@Component({
  selector: 'app-intiate-booking',
  templateUrl: './intiate-booking.component.html',
  styleUrls: ['./intiate-booking.component.scss']
})
export class IntiateBookingComponent {
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

  worker: any = null;

  constructor(private ar: ActivatedRoute, private appConstant: ConstantService) {

    this.ar.params.subscribe(params => {
			if(params?.id) {
        this.worker = this.appConstant.MockServicesData.workers.find(wk => wk.id == params.id);
			}
    });

  }

  complete() {

  }

  next() {

  }


  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
  markers: MarkerType[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true,
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true,
    },
  ];
}