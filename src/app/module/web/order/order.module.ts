import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order.routing';
import { OrderComponent } from './order.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatStepperModule,
  ]
})
export class OrderModule { }
