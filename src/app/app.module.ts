import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire/';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import {FbserviceService} from '../servicio/fbservice.service';
import {PipesModule} from '../app/pipes/pipes.module'
import {MenuProvider} from '../menuservice/menu.service'
import { HttpClientModule } from '@angular/common/http';
import  {PipeiesModule} from '../app/pipeies/pipeies.module'
import  {PipeautModule} from '../app/pipeaut/pipeaut.module'
import  {PipeproModule} from '../app/pipepro/pipepro.module'
import { Geolocation } from '@ionic-native/geolocation/ngx';



  var firebaseConfig = {
    apiKey: "AIzaSyB3NjEPgZUk4DZk3bQHS9xiKpuHJD8QhLU",
    authDomain: "reddisbd.firebaseapp.com",
    databaseURL: "https://reddisbd.firebaseio.com",
    projectId: "reddisbd",
    storageBucket: "reddisbd.appspot.com",
    messagingSenderId: "372551234381",
    appId: "1:372551234381:web:7b8086601d8f14def17d04",
    measurementId: "G-JX1SWFBZMT"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
   PipesModule,
   PipeiesModule,
   PipeautModule,
   PipeproModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireDatabase,
    FbserviceService,
    MenuProvider,
    Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
