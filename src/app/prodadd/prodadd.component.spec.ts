import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdaddComponent } from './prodadd.component';

describe('ProdaddComponent', () => {
  let component: ProdaddComponent;
  let fixture: ComponentFixture<ProdaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
