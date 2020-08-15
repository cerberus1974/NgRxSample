import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DashboardComponent } from './dashboard.component';
import { MemoizedSelector } from '@ngrx/store';

import * as fromMessage from '../store/message/reducers/message.reducer';
import { Message, getMessages } from '../store/message';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockStore: MockStore;
  let mockMessagesSelector: MemoizedSelector<fromMessage.State, Message[]>;

  const initialState = {
    messages: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: provideMockStore({ initialState }),
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockMessagesSelector = mockStore.overrideSelector(
      getMessages,
      [{} as Message],
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
