import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarporproPage } from './buscarporpro.page';
import  {PipeproModule} from '../pipepro/pipepro.module'
const routes: Routes = [
  {
    path: '',
    component: BuscarporproPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeproModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarporproPage]
})
export class BuscarporproPageModule {}
