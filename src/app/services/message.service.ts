import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = 'api/messages';

  messages$ = new BehaviorSubject<Message[]>([]);

  constructor(private httpClient: HttpClient) { }

  fetchAll() {
    this.httpClient.get<Message[]>(this.url)
      .subscribe(m => this.messages$.next(m));
  }

  send(message: Message) {
    this.httpClient.post<Message>(this.url, message)
      .subscribe(m => this.messages$.next([...this.messages$.value, m]) );
  }
}
