import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingLineComponent } from './breaking-line.component';

describe('BreakingLineComponent', () => {
  let component: BreakingLineComponent;
  let fixture: ComponentFixture<BreakingLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakingLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
