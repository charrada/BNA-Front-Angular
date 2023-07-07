import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFraisComponent } from './details-frais.component';

describe('DetailsFraisComponent', () => {
  let component: DetailsFraisComponent;
  let fixture: ComponentFixture<DetailsFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
