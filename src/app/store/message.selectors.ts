import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMessage from './message.reducer';

const selectMessageState = createFeatureSelector<fromMessage.State>(fromMessage.messageFeatureKey);

export const getMessages = createSelector(
  selectMessageState,
  fromMessage.selectAll
);

export const getLoading = createSelector(
  selectMessageState,
  state => state.loading
);

export const getAddSuccessFlag = createSelector(
  selectMessageState,
  state => state.success
);

export const getAddError = createSelector(
  selectMessageState,
  state => state.error
);
