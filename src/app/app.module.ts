import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomebComponent } from './homeb/homeb.component';
import { LoginbComponent } from './loginb/loginb.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    NavbarComponent,
    HomebComponent,
    LoginbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
