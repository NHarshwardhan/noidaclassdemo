import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { buyLaptop } from '../store/cake.action';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  cakeValue: any
  constructor(private store: Store<{cake:{numberOfLaptop:number}}>){}

  ngOnInit(){
      this.store.select('cake').subscribe(
         data=>{
             this.cakeValue = data.numberOfLaptop
         }
      )
  }

  buyLaptop(){
      this.store.dispatch(buyLaptop())
  }
}
