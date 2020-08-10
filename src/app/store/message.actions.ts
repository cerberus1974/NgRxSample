import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Message } from '../message';

export enum Actions {
  SendMessage = '[MessageForm] Send Messages',
  AddMessageSuccess = '[API/Messages] Add Success',
  GetAllMessage = '[API/Messages] Get All',
  GetAllMessageSuccess = '[API/Messages] Get All Success',
}

export const sendMessage = createAction(Actions.SendMessage, props<Message>());

export const addMessageSuccess = createAction(Actions.AddMessageSuccess, props<{ message: Message, success: boolean }>());

export const getAllMessage = createAction(Actions.GetAllMessage);

export const getAllMessageSuccess = createAction(Actions.GetAllMessageSuccess, props<{messages: Message[]}>());




