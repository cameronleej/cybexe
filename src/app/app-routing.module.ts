import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CameronComponent } from './cameron/cameron.component';
import { CiphersComponent } from './ciphers/ciphers.component';
import { DylanComponent } from './dylan/dylan.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { TomComponent } from './tom/tom.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
  {
    path:'Passwords',component: PasswordsComponent
  },
  {
    path:'Ciphers',component:CiphersComponent
  },
  {
    path:'Info', component: InfoComponent
  },
  {
    path:'About', component: AboutComponent
  },
  {
    path:'About/Cameron',component: CameronComponent
  },
  {
    path:'About/Tom',component: TomComponent
  },
  {
    path:'About/Dylan',component:DylanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
