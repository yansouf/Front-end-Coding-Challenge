import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import { MyGuard } from './shared/my.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bestrepos', pathMatch: 'full'},
  { path: 'bestrepos', loadChildren: () => import('./bestrepos/bestrepos.module').then(m => m.BestReposModule), }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
