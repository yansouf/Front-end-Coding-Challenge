
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BestReposComponent } from './bestrepos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatModule } from '../mat.module';
import { BestReposRoutingModule } from './bestrepos-routing.module';
import { DateAgoPipe } from '../pipes/date-ago.pipe';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
@NgModule({
  declarations: [
    BestReposComponent,
    DateAgoPipe,
    ShortNumberPipe
  ],
  imports: [
    CommonModule,
    MatModule,
    // LoaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BestReposRoutingModule,
    ScrollDispatchModule,
    ScrollingModule,
  ]
})
export class BestReposModule {
  constructor( ) {
  }
}
