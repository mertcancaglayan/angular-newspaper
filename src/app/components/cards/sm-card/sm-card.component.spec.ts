import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCardComponent } from './sm-card.component';

describe('SmCardComponent', () => {
  let component: SmCardComponent;
  let fixture: ComponentFixture<SmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
