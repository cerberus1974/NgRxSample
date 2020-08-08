import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Message[] = [];

  messages$ = new BehaviorSubject<Message[]>([]);


  constructor() { }

  send(message: Message) {
    this.messages.push(message);
    this.messages$.next(this.messages);
  }
}
