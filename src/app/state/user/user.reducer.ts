import { User } from "src/app/entity/user";
import { createReducer, on } from "@ngrx/store";
import * as UserAction from '../user/user.action';

export interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }

  export const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
  };

  export const userReducer = createReducer(
    initialState,
  
    on(UserAction.register, state => ({
      ...state,
      loading: true,
      error: null,

    })),
  
    on(UserAction.registerSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),
  
    on(UserAction.registerFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false
    }))
  );