import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { getMessages, getAllMessageByDashboard} from '../store/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  messages$ = this.store.pipe(select(getMessages));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getAllMessageByDashboard());
  }

}
