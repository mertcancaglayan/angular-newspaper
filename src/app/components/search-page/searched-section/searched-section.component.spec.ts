import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedSectionComponent } from './searched-section.component';

describe('SearchedSectionComponent', () => {
  let component: SearchedSectionComponent;
  let fixture: ComponentFixture<SearchedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
