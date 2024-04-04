import { TestBed } from '@angular/core/testing';

import { WeatherCardsService } from './weather-cards.service';

describe('WeatherCardsService', () => {
  let service: WeatherCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
