import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
 
    {
    path: 'buscaries',
    loadChildren: () => import('./buscaries/buscaries.module').then(m => m.BuscariesPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaPageModule)
  },

  { path: 'buscarpories', loadChildren: './buscarpories/buscarpories.module#BuscarporiesPageModule' },
  { path: 'buscarporaut', loadChildren: './buscarporaut/buscarporaut.module#BuscarporautPageModule' },
  { path: 'buscarporpro', loadChildren: './buscarporpro/buscarporpro.module#BuscarporproPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'tipo-p', loadChildren: './tipo-p/tipo-p.module#TipoPPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
