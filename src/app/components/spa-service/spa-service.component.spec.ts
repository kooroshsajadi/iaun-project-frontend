import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaServiceComponent } from './spa-service.component';

describe('SpaServiceComponent', () => {
  let component: SpaServiceComponent;
  let fixture: ComponentFixture<SpaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
