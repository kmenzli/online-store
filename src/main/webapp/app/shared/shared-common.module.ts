import { NgModule } from '@angular/core';

import { AppStoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AppStoreSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AppStoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AppStoreSharedCommonModule {}
