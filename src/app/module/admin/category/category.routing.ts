import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './containers/category/category.component';

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
    component: CategoryComponent
  },
  {
    path: 'categoryFormEdit/:id',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
