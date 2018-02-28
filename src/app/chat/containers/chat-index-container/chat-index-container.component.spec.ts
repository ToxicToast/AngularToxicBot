import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIndexContainerComponent } from './chat-index-container.component';

describe('ChatIndexContainerComponent', () => {
  let component: ChatIndexContainerComponent;
  let fixture: ComponentFixture<ChatIndexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIndexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIndexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
