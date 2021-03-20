import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMockUserComponent } from './single-mock-user.component';

describe('SingleMockUserComponent', () => {
  let component: SingleMockUserComponent;
  let fixture: ComponentFixture<SingleMockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
