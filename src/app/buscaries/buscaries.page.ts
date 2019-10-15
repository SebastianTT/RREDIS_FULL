import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import {BuscarporiesPage} from '../buscarpories/buscarpories.page';
import {BuscarporautPage} from '../buscarporaut/buscarporaut.page';
import {BuscarporproPage} from '../buscarporpro/buscarporpro.page';


import { Router } from '@angular/router';
@Component({
  selector: 'app-buscaries',
  templateUrl: './buscaries.page.html',
  styleUrls: ['./buscaries.page.scss'],
})
export class BuscariesPage implements OnInit {
  items = [];
  items2 = [];
  items3 = [];
  items4 = [];
  constructor(public nav: NavController,private router: Router ) {
  this.items = [
      {
        'title': '   Buscar por IES',

        'icon': 'archive',
        
        'color': 'white'
      },
    ] 
this.items2 = [
      {
        'title': '   Buscar por semillero',

        'icon': 'md-contacts',
        
        'color': 'white'
      },
    ] 
this.items3 = [
      {
        'title': '   Buscar por proyecto',

        'icon': 'information-circle',
        
        'color': 'white'
      },
    ]
    this.items4 = [
      {
        'title': '   Buscar por tipo',

        'icon': 'information-circle',
        
        'color': 'white'
      },
    ]  

}
      openNavDetailsPage(item) {
    this.router.navigateByUrl('/buscarpories');
  }

  openNavDetailsPage2(item) {
    this.router.navigateByUrl('/buscarporpro');
  }

  openNavDetailsPage3(item) {
    this.router.navigateByUrl('/buscarporaut');
  }

  openNavDetailsPage4(item) {
    this.router.navigateByUrl('/tipo-p');
  }

  ngOnInit() {
  }

}
