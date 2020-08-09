import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, messageFeatureKey } from './message.reducer';

const getState = createFeatureSelector<State>(messageFeatureKey);

export const getMessages = createSelector(getState, state => state.messages);