import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMockUserComponent } from './display-mock-user.component';

describe('DisplayMockUserComponent', () => {
  let component: DisplayMockUserComponent;
  let fixture: ComponentFixture<DisplayMockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
