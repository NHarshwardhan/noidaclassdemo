import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PolicyComponent } from './policy/policy.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { cakeReducer } from './store/cake.reducer';
import { StoreModule } from '@ngrx/store';
import { CakeContainerComponent } from './cake-container/cake-container.component';
import { TestComponent } from './test/test.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { todoReducer } from './store/todo.reducer';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { createCustomElement } from '@angular/elements';
import { TestDemoComponent } from './test-demo/test-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PolicyComponent,
    CakeContainerComponent,
    TestComponent,
    TodoContainerComponent,
    PageNotFoundComponent,
    TestDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
SharedModule,
    ReactiveFormsModule,HttpClientModule,
    StoreModule.forRoot({cake:cakeReducer})
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {

     constructor(private injector: Injector){}

     ngDoBootstrap(){
        const element = createCustomElement(AppComponent,{
              injector: this.injector
          })
      customElements.define('app-micro-fe',element)

     }

 }
