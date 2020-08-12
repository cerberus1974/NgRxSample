import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../user.model';
import * as UserActions from '../actions/user.actions';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers,
    (state) => ({ ...state })
  ),
  on(UserActions.loadUsersSuccess,
    (state, action) => adapter.setAll(action.users, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
