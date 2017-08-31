import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HeaderComponent } from './container-components/header/header.component';
import { FooterComponent } from './container-components/footer/footer.component';
import { HomeComponent } from './core-components/home/home.component';
import { PageNotFoundComponent } from './core-components/page-not-found/page-not-found.component';
import { routing } from "app/app-router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
     // App Routing
     routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
