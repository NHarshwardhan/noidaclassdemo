import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private router:Router, private http: HttpClient) { }

  isLoggedIn(){
     return sessionStorage.getItem('token')
  }

  checkLoggedIn(){
      if(!sessionStorage.getItem('role')){
        alert('You are not authorized to visit this route, Please Login First')
        this.router.navigate(['/login'])
        return false
      }
      else{
         return true
      }
  }

  isAdmin(){
      let role = sessionStorage.getItem('role')
      if(role === 'admin'){
        return true
      }
      else{
        return false
      }
    }

  loginWithJWtApi(loginFormData:any):Observable<any>{

      return this.http.post(
        `https://examhall.onrender.com/api/user/login`,
        loginFormData,
        {
          headers: new HttpHeaders({'content-type':'application/json'})
        })
      // ).pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse):any{
        let message = undefined
        message = `code : ${error.status} \n Message = ${error.message}`
        throw(message)
   }
  getListInfo():Observable<any>{
     return this.http.get(
      `https://examhall.onrender.com/api/user/list`,{
        headers: new HttpHeaders({
             'Authorization': `Bearer eyJhbGciOwqweqweqweqweqweqweiJIUzIqwwqewqewqe1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhmZmFlZDg5MmIyNDAwMzMzMzcxZDYiLCJpYXQiOjE2ODcxNTc1MDF9.-Bsoa-ppnhnS3EUIl27QNEJtGntmymDw6KW2sMo8EiY`
        })
      }
     )
  }
}
