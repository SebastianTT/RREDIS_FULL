import { Component, OnInit } from '@angular/core';
import  {BuscariesPage} from '../buscaries/buscaries.page';

@Component({
  selector: 'app-buscarpor',
  templateUrl: './buscarpor.page.html',
  styleUrls: ['./buscarpor.page.scss'],
})
export class BuscarporPage implements OnInit {
buscaries = BuscariesPage;
  constructor() { }

  ngOnInit() {
  }

}
