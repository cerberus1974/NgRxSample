import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { SendMessageListComponent } from './send-message-list/send-message-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    SendMessageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
