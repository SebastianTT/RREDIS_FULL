import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {MenuProvider} from '../menuservice/menu.service';
import {IonNav, NavController, MenuController } from '@ionic/angular';

import {BuscarporPage} from '../app/buscarpor/buscarpor.page'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  rootPage:any = BuscarporPage;
   selectedMenu: any;
   pages: any;
  public appPages = [
    {
      title: 'Login',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Listar',
      url: '/list',
      icon: 'list'
    },

     {
      title: 'Buscar',
      url: '/buscaries',
      icon: 'search'
    },

     {
      title: 'Mapa',
      url: '/mapa',
      icon: 'map'
    },
    {
      title: 'Patrocinadores',
      url: '/patrocinadores',
      icon: 'people'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuProvider: MenuProvider,
     public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.getSideMenuData();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
    getSideMenuData() {
    this.pages = this.menuProvider.getSideMenus();
  }
    openPage(page, index) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {

      this.menuCtrl.close();
    } else {
      if (this.selectedMenu) {
        this.selectedMenu = 0;
      } else {
        this.selectedMenu = index;
      }
    }
  }
  setAndroidBackButtonBehavior(): void {
    if (this.platform.is('android')) {
       this.platform.backButton.subscribe(() => {
        if (window.location.pathname == "/") {
          navigator['app'].exitApp();
        }
      });
    }
  }
}
