import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdVCardComponent } from './md-v-card.component';

describe('MdVCardComponent', () => {
  let component: MdVCardComponent;
  let fixture: ComponentFixture<MdVCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MdVCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MdVCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
