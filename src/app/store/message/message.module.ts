import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMessage from './reducers/message.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffects } from './effects/message.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMessage.messageFeatureKey, fromMessage.reducer),
    EffectsModule.forFeature([MessageEffects])
  ]
})
export class MessageModule { }
