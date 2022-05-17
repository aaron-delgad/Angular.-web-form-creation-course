import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateRoutingModule } from './product-create.routing';
import { ProductCreateComponent } from './product-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {ComponentsModule} from './../../../../shared/components/components.module';

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ComponentsModule,
  ]
})
export class ProductCreateModule { }
