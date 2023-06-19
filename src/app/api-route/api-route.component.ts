import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-api-route',
  templateUrl: './api-route.component.html',
  styleUrls: ['./api-route.component.css']
})
export class ApiRouteComponent {

    constructor(private homeService:HomeService){}


    ngOnInit(){
       this.homeService.getListInfo().subscribe({
           next:(response)=>{
              console.log(response)
           },
           error:(reject)=>{
               console.log(reject.error)
           }
       })
    }
}
