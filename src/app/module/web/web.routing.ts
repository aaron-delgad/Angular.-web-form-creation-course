import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'web', pathMatch: 'full',
  },
  {
    path: 'web',
    component: WebComponent,
    children: [
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m =>m.OrderModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
