import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFraisComponent } from './image-frais.component';

describe('ImageFraisComponent', () => {
  let component: ImageFraisComponent;
  let fixture: ComponentFixture<ImageFraisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFraisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
