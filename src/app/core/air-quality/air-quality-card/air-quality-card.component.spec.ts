import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityCardComponent } from './air-quality-card.component';

describe('AirQualityCardComponent', () => {
  let component: AirQualityCardComponent;
  let fixture: ComponentFixture<AirQualityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirQualityCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirQualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
