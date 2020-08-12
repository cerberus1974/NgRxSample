import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services';

import { AppComponent } from './app.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { SendMessageListComponent } from './send-message-list/send-message-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as messageReducer from './store/message.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from './store/message.effects';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MesssageComponent } from './messsage/messsage.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './store/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    SendMessageListComponent,
    DashboardComponent,
    MesssageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({message: messageReducer.reducer}, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([MessageEffects]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
