
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BestReposComponent } from './bestrepos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat.module';
import { BestReposRoutingModule } from './bestrepos-routing.module';

@NgModule({
  declarations: [
    BestReposComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    // LoaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BestReposRoutingModule
  ]
})
export class BestReposModule {
  constructor( ) {
  }
}
