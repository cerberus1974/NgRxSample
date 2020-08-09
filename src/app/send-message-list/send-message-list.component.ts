import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services';
import { Message } from '../message';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getAllMessage } from '../store/message.actions';
import { tap } from 'rxjs/operators';

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
    this.store.dispatch(getAllMessage());
  }

  onReload(): void {
    this.store.dispatch(getAllMessage());
  }

}
