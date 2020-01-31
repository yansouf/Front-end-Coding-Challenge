import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
//import { MyGuard } from './shared/my.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'git', pathMatch: 'full'},
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
