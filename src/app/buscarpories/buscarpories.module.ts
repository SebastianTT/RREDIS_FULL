import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {PipeiesModule} from '../pipeies/pipeies.module';

import { BuscarporiesPage } from './buscarpories.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarporiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      PipeiesModule,

    RouterModule.forChild(routes)
  ],
  declarations: [BuscarporiesPage]
})
export class BuscarporiesPageModule {}
