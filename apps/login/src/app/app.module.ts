import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {BootstrapModule} from "../modules/bootstrap/bootstrap.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
