import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginForm: FormGroup = new FormGroup({})

    constructor(private homeService:HomeService){}
    ngOnInit(){
        this.loginForm = new FormGroup({
              email: new FormControl(),
              password: new FormControl()
        })

    }

    // loginProcess(){
    //      let email = this.loginForm.value.email
    //      let password = this.loginForm.value.password

    //      if(email && password){
    //           sessionStorage.setItem('role',email)
    //      }
    //      else{
    //       alert('Please provide email/password')
    //      }
    // }

    loginProcess(){
      this.homeService.loginWithJWtApi(this.loginForm.value)
          .subscribe({
             next:(response)=>{
                console.log(response)
                sessionStorage.setItem('token',response.token)
             },
             error:(reject:any)=>{
                 console.log(reject)
             }
          })

    }

    canExit(){

          if(confirm('Are you sure to Leave this page')){

            return true
         }
         else{
          return false
         }
        }
    }


