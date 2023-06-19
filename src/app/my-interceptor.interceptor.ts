import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('interceptor triggered')
    console.log(sessionStorage.getItem('token'))
    let tokenReq = request.clone({
       setHeaders:{
              Authorization:`Bearer ${sessionStorage.getItem('token')}`
       }
    })
    return next.handle(tokenReq);

    // console.log('interceptor triggered')
    // console.log(request.method)
    // return next.handle(request)
    // // return next.handle(request).pipe(
    // //     tap({
    // //         next:(event)=>{

    // //         },
    // //         error:(event:any)=>{
    // //              if(event instanceof HttpErrorResponse){
    // //                  if(event.status ===400){
    // //                    alert('EMail Not Found')
    // //                  }
    // //                  if(event.status ===404){
    // //                   alert('Bad Request')
    // //                 }
    // //              }
    // //         }
    // //     })
    // // )

  }
}
