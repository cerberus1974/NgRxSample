import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from '../services';
import { switchMap, map, concatMap } from 'rxjs/operators';

import * as MessageActions from './message.actions';
import { Message } from '../message';

@Injectable()
export class MessageEffects {

  getMessages$ = createEffect(() => this.actions$.pipe(
    ofType(MessageActions.getAllMessage),
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
        map((message: Message) => MessageActions.addMessageSuccess( { message })),
      )
    )
  ));

  constructor(private actions$: Actions, private service: MessageService) {}

}
