import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexContainerComponent } from './dashboard-index-container.component';

describe('DashboardIndexContainerComponent', () => {
  let component: DashboardIndexContainerComponent;
  let fixture: ComponentFixture<DashboardIndexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIndexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIndexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
