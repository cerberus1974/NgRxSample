import { Component, OnInit } from '@angular/core';
import { getAllMessageBySendMessageList, getMessages, getLoading } from '../store/message';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-send-message-list',
  templateUrl: './send-message-list.component.html',
  styleUrls: ['./send-message-list.component.scss']
})
export class SendMessageListComponent implements OnInit {

  sendMessages$ = this.store.pipe(select(getMessages));

  loading$ = this.store.pipe(select(getLoading));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getAllMessageBySendMessageList());
  }
}
