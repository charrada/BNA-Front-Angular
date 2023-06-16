import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFraisComponent } from './all-frais.component';

describe('AllFraisComponent', () => {
  let component: AllFraisComponent;
  let fixture: ComponentFixture<AllFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
