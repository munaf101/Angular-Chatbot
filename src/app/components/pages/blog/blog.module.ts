import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { BlogRoutingModule } from './blog-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ Blog1Component, Blog2Component, Blog3Component],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbModule,
    NgSelectModule,
    SharedModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
