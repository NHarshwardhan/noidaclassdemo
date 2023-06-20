import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {

  constructor(private store: Store<{todo:{numberOfCakes:number}}>){}


  addTodo(userInput:any){

  }


}
