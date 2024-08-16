import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlCardComponent } from './dl-card.component';

describe('DlCardComponent', () => {
  let component: DlCardComponent;
  let fixture: ComponentFixture<DlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
