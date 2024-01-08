import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import * as UserActions from '../user/user.action';


@Injectable()
export class UserEffects {

    register$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.register),
        mergeMap((action) =>
          this.authService.register(action.user).pipe(
            map(user => {             
              return UserActions.registerSuccess({ user });
            }),
            catchError(error => of(UserActions.registerFailure({ error: error.message })))
          )
        )
      ));


    constructor(
    private actions$: Actions,
    private authService: AuthService,

    ){}
}