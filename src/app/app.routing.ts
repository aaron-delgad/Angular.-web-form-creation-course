import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'admin', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./module/auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m =>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
