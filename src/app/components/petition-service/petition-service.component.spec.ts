import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionServiceComponent } from './petition-service.component';

describe('PetitionServiceComponent', () => {
  let component: PetitionServiceComponent;
  let fixture: ComponentFixture<PetitionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
