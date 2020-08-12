import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export interface State {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
};

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectIds
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAll
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectTotal
);
