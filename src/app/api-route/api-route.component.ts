import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-api-route',
  templateUrl: './api-route.component.html',
  styleUrls: ['./api-route.component.css']
})
export class ApiRouteComponent {

    users:any
    constructor(private homeService:HomeService){}


    ngOnInit(){
      this.users =   this.homeService.getListInfo()
      //  this.homeService.getListInfo().subscribe({
      //      next:(response)=>{
      //       console.log(response)
      //         this.users = response
      //      },
      //      error:(reject)=>{
      //          console.log(reject.error)
      //      }
      //  })
    }
}
