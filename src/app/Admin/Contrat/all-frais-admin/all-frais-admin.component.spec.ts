import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFraisAdminComponent } from './all-frais-admin.component';

describe('AllFraisAdminComponent', () => {
  let component: AllFraisAdminComponent;
  let fixture: ComponentFixture<AllFraisAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFraisAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFraisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
