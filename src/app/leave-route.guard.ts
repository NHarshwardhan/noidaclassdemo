import { CanDeactivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeService } from './home.service';
import { inject } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const leaveRouteGuard: CanDeactivateFn<HomeComponent | LoginComponent> = (component:HomeComponent | LoginComponent, currentRoute, currentState, nextState) => {

     return component.canExit()

   }

