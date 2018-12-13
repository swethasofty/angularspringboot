import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavComponent} from './nav/nav.component'
import {SigninComponent} from './signin/signin.component'
import {SignupComponent} from './signup/signup.component'
import { AddRoutePattrenComponent } from './add-route-pattren/add-route-pattren.component';



const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'home', component: NavComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'AddRoutePattren', component: AddRoutePattrenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
