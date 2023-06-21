import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRouteComponent } from '../api-route/api-route.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

const routes: Routes = [

  {path:'', component:ApiRouteComponent,
    children:[
          {path:'details/:id', component:UserDetailsComponent},
     ]

},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
