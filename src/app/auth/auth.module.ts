import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { FormioAuth } from 'angular-formio/auth';
import {
  FormioResourceRoutes
} from 'angular-formio/resource';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthIndexComponent } from './components/auth-index/auth-index.component';
import { FormioModule } from 'angular-formio';


import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AuthIndexComponent,
    children: [
      { path: 'login', component: AuthLoginComponent }
    ]
  }
];
@NgModule({
  imports: [
    FormioModule,
    CommonModule,
    FormioAuth,
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule,
    SharedModule
  ],
  declarations: [AuthLoginComponent, AuthIndexComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ]
})
export class AuthModule { }
