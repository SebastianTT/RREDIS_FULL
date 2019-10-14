import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrooPipe } from './filtroo.pipe';



@NgModule({
  declarations: [FiltrooPipe],
  exports: [FiltrooPipe]

})
export class PipeiesModule { }
