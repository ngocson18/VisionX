import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./routes').then(m => m.CLIENT_ROUTES) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }