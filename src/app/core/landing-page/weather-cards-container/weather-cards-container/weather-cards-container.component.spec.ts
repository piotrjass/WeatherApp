import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardsContainerComponent } from './weather-cards-container.component';

describe('WeatherCardsContainerComponent', () => {
  let component: WeatherCardsContainerComponent;
  let fixture: ComponentFixture<WeatherCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
