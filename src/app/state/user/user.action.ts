import { createAction, props } from "@ngrx/store";
import { User } from "src/app/entity/user";

export const register = createAction(
    '[user] Register',
    props<{ user: User }>()
);

export const registerSuccess = createAction(
    '[User] Register Success',
    props<{ user: User }>()
);

export const registerFailure = createAction(
    '[User] Register Failure',
    props<{ error: string }>()
);