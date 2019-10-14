import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuProvider {

  constructor(public http: HttpClient) { }

  getSideMenus() {
    return [{
      title: 'Home', component: 'HomePage'
    },
    {
      title: 'Buscar por...',
      subPages: [{
        title: 'Evaluador',
        component: 'BuscarporevPage',
      }]
    }];
  }
}
