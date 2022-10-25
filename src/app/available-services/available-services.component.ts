import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../AppConstant/constant.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.scss']
})
export class AvailableServicesComponent implements OnInit {

  services: [] = null;

  constructor(private appConstant: ConstantService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.services = this.appConstant.MockServicesData.workers;
  }

  activateService(id: string) {

    this.dialog?.closeAll();
    // this.dialog?.afterClosed().subscribe(() => {});
    if(id) {
      this.router.navigate(['booking', id]);
    }
  }

  close() {
    this.dialog?.closeAll();
  }
}
