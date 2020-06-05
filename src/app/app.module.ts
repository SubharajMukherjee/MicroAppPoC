import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { TestComp2Component } from './test-comp2/test-comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    TestComp2Component
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
