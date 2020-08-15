import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormComponent } from './message-form.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MemoizedSelector } from '@ngrx/store';
import * as fromUser from '../store/user/reducers/user.reducer';
import * as fromMessage from '../store/message/reducers/message.reducer';
import { User, selectAllUsers } from '../store/user';
import { getLoading, getAddSuccessFlag, getAddError } from '../store/message';

describe('MessageFormComponent', () => {
  let component: MessageFormComponent;
  let fixture: ComponentFixture<MessageFormComponent>;
  let mockStore: MockStore;
  let mockUsersSelector: MemoizedSelector<fromUser.State, User[]>;
  let mockLoadingSelector: MemoizedSelector<fromUser.State, boolean>;
  let mockAddSuccessSelector: MemoizedSelector<fromMessage.State, boolean>;
  let mockAddErrorSelector: MemoizedSelector<fromMessage.State, boolean>;

  const initialState = {
    messages: [],
    users: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFormComponent ],
      providers: provideMockStore({ initialState }),
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFormComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockUsersSelector = mockStore.overrideSelector(
      selectAllUsers,
      [{} as User],
    );
    mockLoadingSelector = mockStore.overrideSelector(
      getLoading,
      false,
    );
    mockAddSuccessSelector = mockStore.overrideSelector(
      getAddSuccessFlag,
      false,
    );
    mockAddErrorSelector = mockStore.overrideSelector(
      getAddError,
      false,
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
