import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionChangingTextComponent } from './hero-section-changing-text.component';

describe('HeroSectionChangingTextComponent', () => {
  let component: HeroSectionChangingTextComponent;
  let fixture: ComponentFixture<HeroSectionChangingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionChangingTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSectionChangingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
