import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../services';
import { Message } from '../store/message.model';
import { Store, select } from '@ngrx/store';
import { sendMessage } from '../store/message.actions';
import { getLoading, getAddSuccessFlag, getAddError } from '../store/message.selectors';
import { Subscription } from 'rxjs';
import { selectAllUsers } from '../store/user.selectors';
import { loadUsers } from '../store/user.actions';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit, OnDestroy {

  loading$ = this.store.pipe(select(getLoading));

  users$ = this.store.pipe(select(selectAllUsers));

  success$: Subscription;

  error$: Subscription;

  message: string;

  errorMessage = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.success$ = this.store.pipe(select(getAddSuccessFlag))
      .subscribe(f => {
        if (f) this.message = '';
        return f;
      });

    this.error$ = this.store.pipe(select(getAddError))
      .subscribe(e => {
        if (e) this.errorMessage = e.statusText;
        return e;
      })

    this.store.dispatch(loadUsers());
  }

  ngOnDestroy(): void {
    this.success$.unsubscribe();
    this.error$.unsubscribe();
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
