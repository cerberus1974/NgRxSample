import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { MessageEffects } from './message.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Actions } from '../actions/message.actions';
import { MessageService } from 'src/app/services';
import { Message } from '../message.model';

describe('MessageEffects', () => {
  let actions$: Observable<any>;
  let effects: MessageEffects;
  let service: MessageService;

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
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  fdescribe('addMessage$', () => {

    let spy: jasmine.Spy;

    beforeEach(() => {
      spy = spyOn(service, 'send').and.returnValue(of({content: 'test'} as Message));
      actions$ = of({ type: Actions.SendMessage });
    });

    it('MessageService.sendが呼ばれ成功した場合はAddMessageSuccessが呼ばれる', (done) => {
      effects.addMessage$.subscribe((x: any) => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(x.type).toBe(Actions.AddMessageSuccess);
        expect(x.message.content).toBe('test');
        expect(x.success).toBeTruthy();
        done();
      });
    });

    it('MessageService.sendが呼ばれ失敗した場合はAddMessageFailureが呼ばれる', (done) => {
      spy.and.returnValue(throwError({ message: 'error' }));

      effects.addMessage$.subscribe((x: any) => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(x.type).toBe(Actions.AddMessageFailure);
        expect(x.error.message).toBe('error');
        done();
      });
    });
  });
});
