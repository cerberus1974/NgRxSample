import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as UserAction from './user.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { UserService } from '../services/';
import { User } from './user.model';

@Injectable()
export class UserEffects {

  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserAction.loadUsers),
    switchMap(() => this.service.getAll()
      .pipe(
        tap(users => console.log(users)),
        map((users: User[]) => UserAction.loadUsersSuccess({ users }))),
      )
    )
  );

  constructor(private actions$: Actions, private service: UserService) {}

}
