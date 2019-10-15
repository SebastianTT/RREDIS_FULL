import { Component, OnInit } from '@angular/core';
import {  AfterContentInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterContentInit {
map;
lat;
lng;
dis: any;
dis2: any;
	@ViewChild('mapElement', {static: true}) mapElement;
  constructor(private geolocation: Geolocation) { }


  ngOnInit() {
  }
  ngAfterContentInit(): void {
  	

  	this.map = new google.maps.Map(
  		this.mapElement.nativeElement,
  			{
  				center: {lat: this.lat, lng: this.lng},
  				zoom:8
  			});
  	
  	
   this.geolocation.getCurrentPosition().then((resp) => {
   	var pos_1 = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
	var pos_2 = new google.maps.LatLng(4.0690246,-76.1876254);
	var pos_3 = new google.maps.LatLng(4.0690244,-76.2007577);

	console.log('obteniendo con Google :'+google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2)/1000 +''+ 'kms');
	this.dis = google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_2)/1000;
    this.dis2 = google.maps.geometry.spherical.computeDistanceBetween (pos_1, pos_3)/1000;
    this.map.setCenter({lat:resp.coords.latitude, lng:resp.coords.longitude});
    this.map.setZoom(17);

    var marker = new google.maps.Marker({
    position:  {lat:resp.coords.latitude, lng:resp.coords.longitude},
    map: this.map,
    title: 'Ubicación actual',
    icon: {
          url: 'assets/icon/target.png',
          size: {
            width: 64,
            height: 93
          }
        },

  });
    var marke = new google.maps.Marker({

    position:  {  lat: 4.0690246, 
            lng:  -76.1876254},
    map: this.map,
    title: 'Plaza de Armas - ESBOL',
   	 icon: {
          url: 'assets/icon/policeman.png',
          size: {
            width: 64,
            height: 93
          }
        },

  });

 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

    var mark = new google.maps.Marker({

    position:  {  lat: 4.0690244, 
            lng:  -76.2007577},
    map: this.map,
    title: 'UNIVALLE - Tuluá',
   	 icon: {
          url: 'assets/icon/mortarboard.png',
          size: {
            width: 64,
            height: 93
          }
        },

  });
  }


}
