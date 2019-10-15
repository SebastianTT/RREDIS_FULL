import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tipo-p',
  templateUrl: './tipo-p.page.html',
  styleUrls: ['./tipo-p.page.scss'],
})
export class TipoPPage implements OnInit {

  searchQuery: string = '';
  items: string[];
  data: Observable<any>;
  result: any = [];
  sd: string[];
  constructor(public http: HttpClient) {
    this.http.get('https://invessoft.com/api/eventos/1').subscribe(data => {
      console.log(data['agenda'][0].trabajo.tipo_de_trabajo.nombre_tipo_de_trabajo);
      this.sd = new Array(data['agenda'].length);
      for(var i=0;i<this.sd.length;i++){
        this.sd[i] = data['agenda'][i].trabajo.nombre_trabajo + " - "+data['agenda'][i].trabajo.tipo_de_trabajo.nombre_tipo_de_trabajo;        
      }
      this.items = this.sd;
    });
    this.initializeItems();
  }

  initializeItems() {
    return this.items;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if(val.length == 0){
      this.http.get('https://invessoft.com/api/eventos/1').subscribe(data => {
      console.log(data['agenda'][0].trabajo.tipo_de_trabajo.nombre_tipo_de_trabajo);
      this.sd = new Array(data['agenda'].length);
      for(var i=0;i<this.sd.length;i++){
        this.sd[i] = data['agenda'][i].trabajo.nombre_trabajo + " - "+data['agenda'][i].trabajo.tipo_de_trabajo.nombre_tipo_de_trabajo;        
      }
      this.items = this.sd;
    });
    }
  }

  ngOnInit() {
  }

}
