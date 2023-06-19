import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  canExit(){

    if(confirm('Are you sure to Leave this page')){

      return true
   }
   else{
    return false
   }
  }
}

