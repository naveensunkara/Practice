import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }           from './app.component';
import { HeroFormReactiveModule } from "./reactive/hero-form-reactive.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroFormReactiveModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/