import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, messageFeatureKey } from './message.reducer';

const getState = createFeatureSelector<State>(messageFeatureKey);

export const getMessages = createSelector(getState, state => state.messages);

export const getLoading = createSelector(getState, state => state.loading);

export const getAddSuccessFlag = createSelector(getState, state => state.success);

export const getAddError = createSelector(getState, state => state.error);
