import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageListComponent } from './send-message-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';

import * as fromMessage from '../store/message/reducers/message.reducer';
import { Message, getMessages, getLoading } from '../store/message';

describe('SendMessageListComponent', () => {
  let component: SendMessageListComponent;
  let fixture: ComponentFixture<SendMessageListComponent>;
  let mockStore: MockStore;
  let mockMessagesSelector: MemoizedSelector<fromMessage.State, Message[]>;
  let mockLoadingSelector: MemoizedSelector<fromMessage.State, boolean>;

  const initialState = {
    messages: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageListComponent ],
      providers: provideMockStore({ initialState }),
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockMessagesSelector = mockStore.overrideSelector(
      getMessages,
      [{} as Message],
    );
    mockLoadingSelector = mockStore.overrideSelector(
      getLoading,
      false,
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
