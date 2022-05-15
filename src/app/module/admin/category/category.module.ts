import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category.routing';
import { CategoryComponent } from './containers/category/category.component';
import { CategoryFormModule } from './category-form/category-form.module';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    CategoryFormModule,
  ]
})
export class CategoryModule { }
