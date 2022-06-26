import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule as NativeSharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedModule } from "@ba-project/shared";

@NgModule({
  imports: [CoreModule, NativeSharedModule, AppRoutingModule,
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
