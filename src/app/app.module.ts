import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { TestComp2Component } from './test-comp2/test-comp2.component';
import { TestElement1Component } from './test-element1/test-element1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    TestComp2Component,
    TestElement1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
