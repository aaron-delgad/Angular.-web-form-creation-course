import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order.routing';
import { OrderComponent } from './order.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class OrderModule { }
