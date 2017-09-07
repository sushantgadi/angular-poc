import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpModule, Http } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './container-components/header/header.component';
import { FooterComponent } from './container-components/footer/footer.component';
import { HomeComponent } from './core-components/home/home.component';
import { PageNotFoundComponent } from './core-components/page-not-found/page-not-found.component';
import { routing } from "app/app-router";
import { CoreServices } from "app/services/core.services";
import { DetailComponent } from './core-components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
     // App Routing
     routing
  ],
  providers: [CoreServices,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
