import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCardComponent } from './lg-card.component';

describe('LgCardComponent', () => {
  let component: LgCardComponent;
  let fixture: ComponentFixture<LgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
