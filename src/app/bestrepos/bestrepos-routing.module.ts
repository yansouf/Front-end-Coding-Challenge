import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BestReposComponent } from './bestrepos.component';
//import { MyGuard } from './shared/my.guard';

const routes: Routes = [
  {  path: '', component: BestReposComponent},
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BestReposRoutingModule { }
