import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { Invoice1Component } from './invoice1/invoice1.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddInvoiceComponent, EditInvoiceComponent, InvoiceListComponent, Invoice1Component],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NgbModule,
    FormsModule,    
    SharedModule
  ]
})
export class InvoiceModule { }
