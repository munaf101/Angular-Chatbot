import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact1Component } from './contact1/contact1.component';
import { ContactRoutingModule } from './contact-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [Contact1Component],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class ContactModule { }
