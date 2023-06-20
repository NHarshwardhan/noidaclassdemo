import { createReducer, on } from "@ngrx/store";
import { initialState } from './cake.state';
import { buyLaptop, buycake } from "./cake.action";

const _cakeReducer = createReducer(initialState,
    // on(buycake,(state:any)=>{
    //      return{
    //         ...state,
    //         numberOfCakes: state.numberOfCakes -1
    //      }
    // }),
    on(buycake,(state:any,{payload})=>{
      return{
         ...state,
         numberOfCakes: state.numberOfCakes-payload
      }
 }),
    on(buyLaptop,(state:any)=>{
      return{
         ...state,
         numberOfLaptop: state.numberOfLaptop +1
      }
 })
)

export function cakeReducer(state:any, action:any){
    return _cakeReducer(state,action)
}
