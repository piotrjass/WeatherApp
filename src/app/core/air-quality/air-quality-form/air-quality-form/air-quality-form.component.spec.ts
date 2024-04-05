import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityFormComponent } from './air-quality-form.component';

describe('AirQualityFormComponent', () => {
  let component: AirQualityFormComponent;
  let fixture: ComponentFixture<AirQualityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirQualityFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirQualityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
