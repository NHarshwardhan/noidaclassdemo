import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { buycake } from '../store/cake.action';
@Component({
  selector: 'app-cake-container',
  templateUrl: './cake-container.component.html',
  styleUrls: ['./cake-container.component.css']
})
export class CakeContainerComponent {

   cakeValue: any
   result:any

   constructor(private store: Store<{cake:{numberOfCakes:number}}>){}

    ngOnInit(){
     this.result= this.store.select('cake').subscribe(
           data=>{
               this.cakeValue = data.numberOfCakes
           }
        )
    }

    buyCake(num:any){
              // this.store.dispatch(buycake())
              this.store.dispatch(buycake({payload:num}))
    }

    ngOnDestroy(){

        this.result.unsubscribe()

    }

}
