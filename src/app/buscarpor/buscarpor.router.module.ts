import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarporPage} from '../buscarpor/buscarpor.page'

const routes: Routes = [
  {
    path: 'buscarpor',
    component: BuscarporPage,
    children: [
      {
        path: 'buscaries',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../buscaries/buscaries.module').then(m => m.BuscariesPageModule)
          }
        ]
      },
    

      {
        path: '',
        redirectTo: '/buscarpor/buscaries',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/buscarpor/buscaries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
