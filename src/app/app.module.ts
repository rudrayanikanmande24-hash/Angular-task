import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './laptop/laptop.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { MouseComponent } from './mouse/mouse.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { FruitComponent } from './fruit/fruit.component';
import { Mobilecomponent } from './mobile/mobile.component';
import { Mobile2Component } from './mobile2/mobile2.component';
import { fruit2Component } from './fruit2/fruit2.component';
import { SubjectComponent } from './subject/subject.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LaptopComponent,
    HeadphoneComponent,
    MouseComponent,
    KeyboardComponent,
    FruitComponent,
    Mobilecomponent,
    Mobile2Component,
    fruit2Component,
    SubjectComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
