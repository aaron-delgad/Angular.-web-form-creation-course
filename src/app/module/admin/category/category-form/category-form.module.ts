import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormRoutingModule } from './category-form.routing';
import { CategoryFormComponent } from './category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoryFormRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[
    CategoryFormComponent
  ]
})
export class CategoryFormModule { }
