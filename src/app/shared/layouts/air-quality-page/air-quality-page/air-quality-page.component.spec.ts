import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityPageComponent } from './air-quality-page.component';

describe('AirQualityPageComponent', () => {
  let component: AirQualityPageComponent;
  let fixture: ComponentFixture<AirQualityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirQualityPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirQualityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
