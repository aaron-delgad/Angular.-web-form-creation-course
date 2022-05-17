import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboardGif', pathMatch: 'full'
  },
  {
    path: 'dashboardGif',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./search-gif/search-gif.module').then(m => m.SearchGifModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
