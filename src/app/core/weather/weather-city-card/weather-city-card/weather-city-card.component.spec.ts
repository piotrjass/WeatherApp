import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityCardComponent } from './weather-city-card.component';

describe('WeatherCityCardComponent', () => {
  let component: WeatherCityCardComponent;
  let fixture: ComponentFixture<WeatherCityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCityCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherCityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
