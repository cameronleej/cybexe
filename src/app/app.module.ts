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
import { FormsModule } from '@angular/forms';
import { HaidaraComponent } from './haidara/haidara.component';
import { DannyComponent } from './danny/danny.component';

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
    DylanComponent,
    HaidaraComponent,
    DannyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
