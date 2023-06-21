import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ApiRouteComponent } from '../api-route/api-route.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ApiRouteComponent,
    UserDetailsComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {

  constructor(){
    console.log('User Module Loaded')
}
}
