import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services';
import { Message } from '../message';
import { Store, select } from '@ngrx/store';
import { sendMessage } from '../store/message.actions';
import { getLoading } from '../store/message.selectors';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  loading$ = this.store.pipe(select(getLoading));

  constructor(private store: Store) { }

  ngOnInit(): void {
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
