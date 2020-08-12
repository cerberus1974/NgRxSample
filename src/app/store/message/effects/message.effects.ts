import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from '../../../services';
import { switchMap, map, concatMap, catchError } from 'rxjs/operators';

import * as MessageActions from '../actions/message.actions';
import { Message } from '../message.model';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {

  getMessages$ = createEffect(() => this.actions$.pipe(
    ofType(MessageActions.getAllMessageBySendMessageList, MessageActions.getAllMessageByDashboard),
    switchMap(() => this.service.getAll()
      .pipe(
        map((messages: Message[]) => MessageActions.getAllMessageSuccess({ messages }))),
      )
    )
  );

  addMessage$ = createEffect(() => this.actions$.pipe(
    ofType(MessageActions.sendMessage),
    concatMap(m => this.service.send(m)
      .pipe(
        map((message: Message) => MessageActions.addMessageSuccess( { message, success: true })),
        catchError(error => of(MessageActions.addMessageFailure({ error }))),
      )
    )
  ));

  constructor(private actions$: Actions, private service: MessageService) {}

}
