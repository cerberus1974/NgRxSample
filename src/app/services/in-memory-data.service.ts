import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Message } from '../message';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const messages = [
    ];

    return {messages};
  }

  genId(messages: Message[]): number {
    return messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 11;
  }
}
