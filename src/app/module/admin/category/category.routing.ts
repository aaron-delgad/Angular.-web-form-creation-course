import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'categoryList', pathMatch: 'full'
  },
  {
    path: 'basicForm',
    loadChildren: () => import('./basic-form/basic-form.module').then(m =>m.BasicFormModule)
  },
  {
    path: 'categoryList',
    loadChildren: () => import('./category-list/category-list.module').then(m =>m.CategoryListModule)
  },
  {
    path: 'categoryFormCreate',
    loadChildren: () => import('./category-form/category-form.module').then(m =>m.CategoryFormModule)
  },
  {
    path: 'categoryFormEdit/:id',
    loadChildren: () => import('./category-form/category-form.module').then(m =>m.CategoryFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
