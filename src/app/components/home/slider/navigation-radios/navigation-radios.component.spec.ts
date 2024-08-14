import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRadiosComponent } from './navigation-radios.component';

describe('NavigationRadiosComponent', () => {
  let component: NavigationRadiosComponent;
  let fixture: ComponentFixture<NavigationRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationRadiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
