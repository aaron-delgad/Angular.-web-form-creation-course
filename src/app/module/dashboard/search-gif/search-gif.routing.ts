import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGifComponent } from './search-gif.component';

const routes: Routes = [
  {
    path: '',
    component: SearchGifComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchGifRoutingModule { }
