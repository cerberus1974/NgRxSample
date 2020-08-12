import { createReducer, on } from '@ngrx/store';
import { Message } from '../message.model';
import * as action from '../actions/message.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


export const messageFeatureKey = 'message';

export interface State extends EntityState<Message> {
  loading: boolean,
  success: boolean,
  error: any,
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  success: false,
  error: {},
});

export const reducer = createReducer(
  initialState,
  on(action.sendMessage, state => ({...state, loading: true, success: false, error: {}})),
  on(action.addMessageSuccess, (state, action) => adapter.upsertOne(action.message, {...state, success: true, loading: false})),
  on(action.addMessageFailure, (state, { error }) => ({...state, loading: false, error})),
  on(
    action.getAllMessageBySendMessageList,
    action.getAllMessageByDashboard,
    state => ({...state, loading: true})
  ),
  on(action.getAllMessageSuccess, (state, action) => adapter.setAll(action.messages, {...state, loading: false})),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
