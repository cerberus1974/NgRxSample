import { Action, createReducer, on } from '@ngrx/store';
import { Message } from '../message';
import * as action from './message.actions';


export const messageFeatureKey = 'message';

export interface State {
  loading: boolean,
  messages: Message[]
}

export const initialState: State = {
  loading: false,
  messages: []
};


export const reducer = createReducer(
  initialState,
  on(action.sendMessage, state => ({...state, loading: true})),
  on(action.addMessageSuccess, (state, { message }) => ({...state, messages: [...state.messages, message], loading: false})),
  on(action.getAllMessage, state => ({...state, loading: true})),
  on(action.getAllMessageSuccess, (state, { messages }) => ({...state, messages: [...messages], loading: false})),
);

