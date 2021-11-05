import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintServiceComponent } from './complaint-service.component';

describe('ComplaintServiceComponent', () => {
  let component: ComplaintServiceComponent;
  let fixture: ComponentFixture<ComplaintServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
