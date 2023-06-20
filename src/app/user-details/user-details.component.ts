import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  id:any
  user:any
  constructor(private activatedRoute: ActivatedRoute , private homeService:HomeService){}

  ngOnInit(){
      // this.id = this.activatedRoute.snapshot.params['id']
      // this.homeService.getListInfoById(this.id).subscribe({
      //            next:(response)=>{
      //                this.user = response
      //            },
      //            error:(reject)=>{
      //               console.log(reject)
      //            }
      // })

      this.activatedRoute.paramMap.subscribe({
          next:(params)=>{
             this.id = params.get('id')
             this.homeService.getListInfoById(this.id).subscribe({
               next:(response)=>{
                   this.user = response
               },
               error:(reject)=>{
                  console.log(reject)
               }
             })
          }
      })
  }
}
