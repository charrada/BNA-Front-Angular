import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatFraisAdminComponent } from './etat-frais-admin.component';

describe('EtatFraisAdminComponent', () => {
  let component: EtatFraisAdminComponent;
  let fixture: ComponentFixture<EtatFraisAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatFraisAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatFraisAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
