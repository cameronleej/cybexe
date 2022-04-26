import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { CiphersComponent } from './ciphers/ciphers.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { CameronComponent } from './cameron/cameron.component';
import { TomComponent } from './tom/tom.component';
import { DylanComponent } from './dylan/dylan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PasswordsComponent,
    CiphersComponent,
    InfoComponent,
    AboutComponent,
    CameronComponent,
    TomComponent,
    DylanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
