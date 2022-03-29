import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    ButtonModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})

export class AppModule { }
