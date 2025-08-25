import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyOrderedComponent } from './frequently-ordered.component';

describe('FrequentlyOrderedComponent', () => {
  let component: FrequentlyOrderedComponent;
  let fixture: ComponentFixture<FrequentlyOrderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentlyOrderedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentlyOrderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
