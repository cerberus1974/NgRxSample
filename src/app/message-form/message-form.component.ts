import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../services';
import { Message } from '../message';
import { Store, select } from '@ngrx/store';
import { sendMessage } from '../store/message.actions';
import { getLoading, getAddSuccessFlag } from '../store/message.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit, OnDestroy {

  loading$ = this.store.pipe(select(getLoading));

  success$: Subscription;

  message: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.success$ = this.store.pipe(select(getAddSuccessFlag))
      .subscribe(f => {
        if (f) this.message = '';
        return f;
      });
  }

  ngOnDestroy(): void {
    this.success$.unsubscribe();
  }

  onSubmit(value: string, userId: string) {
    this.store.dispatch(sendMessage({
      senderId: 'me',
      receiverId: userId,
      content: value,
      sentAt: new Date().toLocaleString()
    } as Message));
  }

}
