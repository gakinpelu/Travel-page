import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IstanbulComponent } from './istanbul/istanbul.component';
import { MexicoComponent } from './mexico/mexico.component';
import { PragueComponent } from './prague/prague.component';
import { CapeCodComponent } from './cape-cod/cape-cod.component';
import { LocationLinksComponent } from './location-links/location-links.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IstanbulComponent,
    MexicoComponent,
    PragueComponent,
    CapeCodComponent,
    LocationLinksComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

