import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CiphersComponent } from './ciphers/ciphers.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PasswordsComponent } from './passwords/passwords.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent 
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
