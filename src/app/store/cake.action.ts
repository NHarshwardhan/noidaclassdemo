import { createAction,props } from "@ngrx/store";

// export const buycake = createAction('buycake')
export const buycake = createAction('buycake',props<{payload:any}>())
export const buyLaptop = createAction('buyLaptop')
