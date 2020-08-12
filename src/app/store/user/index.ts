export * from './actions/user.actions';
export * from './selectors/user.selectors';
export { User } from './user.model';

// import {
//   ActionReducer,
//   ActionReducerMap,
//   createFeatureSelector,
//   createSelector,
//   MetaReducer
// } from '@ngrx/store';
// import { environment } from '../../../environments/environment';

// export const reducers: ActionReducerMap<State> = {
//   // カウンタのReducerをマップに登録しています。
//   counter: fromCounter.reducer,
// };

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
