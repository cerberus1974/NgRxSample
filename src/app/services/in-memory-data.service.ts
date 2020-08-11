import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Message } from '../store/message.model';
import { MessageService } from './message.service';
import { User } from '../store/user.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const messages: Message[] = [
      { id: 1, senderId: '002', receiverId: '001', content: 'temp' } as Message
    ];

    const users: User[] = [
      { id: '001', name: 'test user1' } as User,
      { id: '002', name: 'test user2' } as User,
      { id: '003', name: 'test user3' } as User,

    ]

    return {messages, users};
  }

  genId(messages: Message[]): number {
    return messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 11;
  }
}
