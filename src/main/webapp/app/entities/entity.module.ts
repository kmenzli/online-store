import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppStoreProductModule } from './product/product.module';
import { AppStoreProductCategoryModule } from './product-category/product-category.module';
import { AppStoreCustomerModule } from './customer/customer.module';
import { AppStoreProductOrderModule } from './product-order/product-order.module';
import { AppStoreOrderItemModule } from './order-item/order-item.module';
import { AppStoreInvoiceModule } from './invoice/invoice.module';
import { AppStoreShipmentModule } from './shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        AppStoreProductModule,
        AppStoreProductCategoryModule,
        AppStoreCustomerModule,
        AppStoreProductOrderModule,
        AppStoreOrderItemModule,
        AppStoreInvoiceModule,
        AppStoreShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppStoreEntityModule {}
