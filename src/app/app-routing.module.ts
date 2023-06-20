import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { leaveRouteGuard } from './leave-route.guard';
import { PolicyComponent } from './policy/policy.component';
import { nestedProtectionGuard } from './nested-protection.guard';
import { ApiRouteComponent } from './api-route/api-route.component';
import { cakeReducer } from './store/cake.reducer';
import { CakeContainerComponent } from './cake-container/cake-container.component';


const routes: Routes = [
  {
      path:'home',
      component: HomeComponent,
       canActivate:[authGuard],
       canDeactivate:[leaveRouteGuard],
       canActivateChild:[nestedProtectionGuard],
       children:[
           {path:'policy', component:PolicyComponent}
      ]
    },
    {path:'cake', component: CakeContainerComponent},
    {path:'users', component:ApiRouteComponent},
  {path:'login', component: LoginComponent,canDeactivate:[leaveRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
