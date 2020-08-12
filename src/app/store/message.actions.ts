import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Message } from './message.model';

export enum Actions {
  SendMessage = '[MessageForm] Send Messages',
  AddMessageSuccess = '[API/Messages] Add Success',
  AddMessageFailure = '[API/Messages] Add Failure',
  SendMessageListGetAll = '[SendMessageList] Get All',
  DashboardGetAll = '[Dashboard] Get All',
  GetAllMessageSuccess = '[API/Messages] Get All Success',
}

export const sendMessage = createAction(Actions.SendMessage, props<Message>());

export const addMessageSuccess = createAction(Actions.AddMessageSuccess, props<{ message: Message, success: boolean }>());

export const addMessageFailure = createAction(Actions.AddMessageFailure, props<{ error: any }>());

export const getAllMessageBySendMessageList = createAction(Actions.SendMessageListGetAll);

export const getAllMessageByDashboard = createAction(Actions.DashboardGetAll);

export const getAllMessageSuccess = createAction(Actions.GetAllMessageSuccess, props<{messages: Message[]}>());




