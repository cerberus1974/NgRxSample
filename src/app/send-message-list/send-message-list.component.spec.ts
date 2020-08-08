import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessageListComponent } from './send-message-list.component';

describe('SendMessageListComponent', () => {
  let component: SendMessageListComponent;
  let fixture: ComponentFixture<SendMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
