import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbatchComponent } from './productbatch.component';

describe('ProductbatchComponent', () => {
  let component: ProductbatchComponent;
  let fixture: ComponentFixture<ProductbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductbatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
