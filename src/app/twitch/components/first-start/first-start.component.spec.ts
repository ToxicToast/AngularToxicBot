import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStartComponent } from './first-start.component';

describe('FirstStartComponent', () => {
  let component: FirstStartComponent;
  let fixture: ComponentFixture<FirstStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
