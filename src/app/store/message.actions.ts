import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Message } from '../message';

export enum Actions {
  SendMessage = '[MessageForm] Send Messages',
  getAllMessage = '[API/Messages] Get All',
  getAllMessageSuccess = '[API/Messages] Get All Success',
}

export const sendMessage = createAction(Actions.SendMessage, props<Message>());

export const getAllMessage = createAction(Actions.getAllMessage);

export const getAllMessageSuccess = createAction(Actions.getAllMessageSuccess, props<{messages: Message[]}>());




