import { Action, createReducer, on } from '@ngrx/store';
import { Message } from '../message';
import * as action from './message.actions';


export const messageFeatureKey = 'message';

export interface State {
  messages: Message[]
}

export const initialState: State = {
  messages: []
};


export const reducer = createReducer(
  initialState,
  on(action.sendMessage, state => ({...state})),
  on(action.getAllMessage, state => ({...state})),
  on(action.getAllMessageSuccess, (state, { messages }) => ({...state, messages: [...messages]})),
);

