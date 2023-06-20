import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PolicyComponent } from './policy/policy.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { ApiRouteComponent } from './api-route/api-route.component';
import { cakeReducer } from './store/cake.reducer';
import { StoreModule } from '@ngrx/store';
import { CakeContainerComponent } from './cake-container/cake-container.component';
import { TestComponent } from './test/test.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { todoReducer } from './store/todo.reducer';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PolicyComponent,
    ApiRouteComponent,
    CakeContainerComponent,
    TestComponent,
    TodoContainerComponent,
    UserDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    StoreModule.forRoot({todo:todoReducer})
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
