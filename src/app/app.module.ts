import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GooglePlus}from '@ionic-native/google-plus/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
  apiKey: "AIzaSyAAxPEi-X-JFIsYajzk0gzLdDND-SMspTg",
  authDomain: "decent-era-254723.firebaseapp.com",
  databaseURL: "https://decent-era-254723.firebaseio.com",
  projectId: "decent-era-254723",
  storageBucket: "decent-era-254723.appspot.com",
  messagingSenderId: "78586309499",
  appId: "1:78586309499:web:adaa6693778e9c84666bde",
  measurementId: "G-HV33K1L96F"
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
    GooglePlus,
    NativeStorage,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireDatabase,
    FbserviceService,
    MenuProvider,
    Geolocation,
      Platform,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
