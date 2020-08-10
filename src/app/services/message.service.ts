import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../message';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = 'api/messages';

  messages$ = new BehaviorSubject<Message[]>([]);

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.url);
  }

  send(message: Message) {
    return this.httpClient.post<Message>(this.url, message);
  }
}
