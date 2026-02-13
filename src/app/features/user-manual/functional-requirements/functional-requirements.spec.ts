import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalRequirements } from './functional-requirements';

describe('FunctionalRequirements', () => {
  let component: FunctionalRequirements;
  let fixture: ComponentFixture<FunctionalRequirements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalRequirements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalRequirements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
