import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantServiceComponent } from './consultant-service.component';

describe('ConsultantServiceComponent', () => {
  let component: ConsultantServiceComponent;
  let fixture: ComponentFixture<ConsultantServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
