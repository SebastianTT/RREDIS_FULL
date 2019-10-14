import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarporautPage } from './buscarporaut.page';
import  {PipeautModule} from '../pipeaut/pipeaut.module'

const routes: Routes = [
  {
    path: '',
    component: BuscarporautPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeautModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarporautPage]
})
export class BuscarporautPageModule {}
