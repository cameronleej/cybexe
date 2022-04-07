import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CameronComponent } from './cameron/cameron.component';
import { CiphersComponent } from './ciphers/ciphers.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { TomComponent } from './tom/tom.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
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
  },
  {
    path:'Cameron',component: CameronComponent
  },
  {
    path:'Tom',component: TomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
