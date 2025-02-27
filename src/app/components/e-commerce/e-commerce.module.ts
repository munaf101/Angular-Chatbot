import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductsDetailsComponent, ShoppingCartComponent, WhishlistComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    NgSelectModule,
    NgbModule,
    MaterialModuleModule,
    FormsModule,ReactiveFormsModule,SharedModule
  ]
})
export class ECommerceModule { }
