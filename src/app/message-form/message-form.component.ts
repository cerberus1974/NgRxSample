import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services';
import { Message } from '../message';
import { Store } from '@ngrx/store';
import { sendMessage } from '../store/message.actions';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

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
