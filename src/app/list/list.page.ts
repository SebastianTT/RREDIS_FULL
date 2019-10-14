import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {FbserviceService} from '../../servicio/fbservice.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
   idSelected:any;
  datosagenda = []; 
  
 
  textobuscar='';
  agenda = {id:0, name:null, quantity:null};
  show:boolean;
  i:any;

  constructor( public navCtrl: NavController,
   public datos: FbserviceService) { 
    this.show = false; 
    this.idSelected = 0; 
datos.getDatos().subscribe(datosagenda => {
  this.datosagenda = datosagenda
});
  


  }

  selectFruit(campus){ 
    this.show = true;
    this.idSelected = campus;

    let received:any; 

    this.datos.getDatos()
    .subscribe(datoo=>{
      received = datoo;
      this.agenda = received;

    });
  }

  buscar(event){
    console.log(event);
    this.textobuscar = event.detail.value;
  }
  
  ngOnInit() {
    this.datos.getDatos().subscribe(datosagenda => {
  this.datosagenda = datosagenda
});
  }
}
