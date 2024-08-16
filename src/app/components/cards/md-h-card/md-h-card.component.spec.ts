import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdHCardComponent } from './md-h-card.component';

describe('MdHCardComponent', () => {
  let component: MdHCardComponent;
  let fixture: ComponentFixture<MdHCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdHCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdHCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
