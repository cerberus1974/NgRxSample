import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  constructor(private service: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(value: string, userId: string) {
    this.service.send({
      senderId: 'me',
      receiverId: userId,
      content: value,
      sentAt: new Date().toLocaleString()
    })
  }

}
