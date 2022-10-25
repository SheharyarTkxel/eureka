import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() { }
  MockServicesData: any = {
    workers: [{
        id: 1,
        name: 'Subhan',
        type: 'Plumber',
    
    },
    {
        id: 2,
        name: 'Sajid',
        type: 'Electration',
    }
  ]
  };
}
