import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
// import * as User from './user/reducers/user.reducer';
// import * as Message from './message/reducers/message.reducer';


export interface State {
  // user: User.State,
  // message: Message.State,
}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
