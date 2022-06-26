import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule as NativeSharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent } from './components';
import {SharedModule} from "@ba-project/shared";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
    imports: [NativeSharedModule, NativeScriptRouterModule.forChild(routes), SharedModule],
  declarations: [...HOME_COMPONENTS],
  exports: [...HOME_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
