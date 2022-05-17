import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGifRoutingModule } from './search-gif.routing';
import { SearchGifComponent } from './search-gif.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SearchGifComponent
  ],
  imports: [
    CommonModule,
    SearchGifRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class SearchGifModule { }
