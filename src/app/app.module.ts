import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './heroDetailComponent';
import { DynamicListComponent } from './dynamicListComponent';
import {ScrollUpdateListDirective} from './scrollUpdateListDirective';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, DynamicListComponent, ScrollUpdateListDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
