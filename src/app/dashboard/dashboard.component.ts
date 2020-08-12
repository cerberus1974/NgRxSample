import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as MessageAction from '../store/message.actions';

import * as MessageSelector from '../store/message.selectors'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  messages$ = this.store.pipe(select(MessageSelector.getMessages));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(MessageAction.getAllMessageByDashboard());
  }

}
