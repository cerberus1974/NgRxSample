import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MessageEffects } from './message.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MessageEffects', () => {
  let actions$: Observable<any>;
  let effects: MessageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageEffects,
        provideMockActions(() => actions$)
      ],
      imports: [
        HttpClientTestingModule,
      ]
    });

    effects = TestBed.inject(MessageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
