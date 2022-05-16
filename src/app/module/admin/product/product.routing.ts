import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'productList', pathMatch: 'full',
  },
  {
    path: 'productCreate',
    loadChildren: () => import('./product-create/product-create.module').then(m =>m.ProductCreateModule)
  },
  {
    path: 'productUpdate/:id',
    loadChildren: () => import('./product-create/product-create.module').then(m =>m.ProductCreateModule)
  },
  {
    path: 'productList',
    loadChildren: () => import('./product-list/product-list.module').then(m=>m.ProductListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
