import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services';
import { Message } from '../message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-send-message-list',
  templateUrl: './send-message-list.component.html',
  styleUrls: ['./send-message-list.component.scss']
})
export class SendMessageListComponent implements OnInit {

  sendMessages$: Observable<Message[]>;

  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.sendMessages$ = this.service.messages$;
  }

}
