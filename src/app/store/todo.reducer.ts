
import { createReducer } from '@ngrx/store';
import { initialState } from './todo.state';
import { on } from '@ngrx/store';
import { CREATE_TODO } from './todo.action';

const _todoReducer = createReducer(initialState,
     on(CREATE_TODO,(state,{payload})=>{
         return state
     }))


export function todoReducer(state:any,action:any){
   return _todoReducer(state,action)
}
