import { createAction, props } from '@ngrx/store';

import { User } from '../user.model';

export enum Actions {
  LoadUsers = '[MessageForm] Load Users',
  LoadUsersSuccess = '[User/API] Load Users Success',
}

export const loadUsers = createAction(
  Actions.LoadUsers
);

export const loadUsersSuccess = createAction(
  Actions.LoadUsersSuccess,
  props<{ users: User[] }>()
);

