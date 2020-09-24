import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EcomRoutes } from './ecom.routing';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { OrderComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { UtilidadesModule } from '../utilidades/utilidades.module';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(EcomRoutes), FormsModule, NgbModule,
    UtilidadesModule,
    NgxPaginationModule
  ],
  declarations: [
    CartComponent,
    CheckoutComponent,
    DetailsComponent,
    EditComponent,
    OrderComponent,
    ProductComponent
    
  ]
})
export class EcomModule {}
