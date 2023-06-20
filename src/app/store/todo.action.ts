import { createAction, props } from "@ngrx/store";

export const CREATE_TODO = createAction('CREATE_TODO',props<{payload:any}>())
