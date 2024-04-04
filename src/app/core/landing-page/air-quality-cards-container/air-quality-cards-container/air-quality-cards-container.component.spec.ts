import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityCardsContainerComponent } from './air-quality-cards-container.component';

describe('AirQualityCardsContainerComponent', () => {
  let component: AirQualityCardsContainerComponent;
  let fixture: ComponentFixture<AirQualityCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirQualityCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirQualityCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
