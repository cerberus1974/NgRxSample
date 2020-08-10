import { Action, createReducer, on } from '@ngrx/store';
import { Message } from '../message';
import * as action from './message.actions';


export const messageFeatureKey = 'message';

export interface State {
  loading: boolean,
  messages: Message[]
  success: boolean,
  error: any,
}

export const initialState: State = {
  loading: false,
  messages: [],
  success: false,
  error: {},
};


export const reducer = createReducer(
  initialState,
  on(action.sendMessage, state => ({...state, loading: true, success: false, error: {}})),
  on(action.addMessageSuccess, (state, { message, success }) => ({...state, messages: [...state.messages, message], loading: false, success})),
  on(action.addMessageFailure, (state, { error }) => ({...state, loading: false, error})),
  on(action.getAllMessage, state => ({...state, loading: true})),
  on(action.getAllMessageSuccess, (state, { messages }) => ({...state, messages: [...messages], loading: false})),
);

