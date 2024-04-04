import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionMainTextComponent } from './hero-section-main-text.component';

describe('HeroSectionMainTextComponent', () => {
  let component: HeroSectionMainTextComponent;
  let fixture: ComponentFixture<HeroSectionMainTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionMainTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSectionMainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
