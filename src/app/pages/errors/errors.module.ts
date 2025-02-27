import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error401Component } from './error401/error401.component';
import { Error503Component } from './error503/error503.component';
import { ErrorRoutingModule } from './errors-routing.module';

@NgModule({
  declarations: [ Error401Component, Error503Component],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorsModule { }
