import { Component, OnInit } from '@angular/core';
import { Message } from '../store/message.model';
import { Store, select } from '@ngrx/store';
import { getAllMessageBySendMessageList } from '../store/message.actions';

import { getMessages, getLoading } from '../store/message.selectors';

@Component({
  selector: 'app-send-message-list',
  templateUrl: './send-message-list.component.html',
  styleUrls: ['./send-message-list.component.scss']
})
export class SendMessageListComponent implements OnInit {

  sendMessages$ = this.store.pipe(select(getMessages));

  loading$ = this.store.pipe(select(getLoading));

  constructor(private store: Store<{message: Message[]}>) { }

  ngOnInit(): void {
    this.store.dispatch(getAllMessageBySendMessageList());
  }
}
