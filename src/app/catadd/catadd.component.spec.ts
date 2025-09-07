import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataddComponent } from './catadd.component';

describe('CataddComponent', () => {
  let component: CataddComponent;
  let fixture: ComponentFixture<CataddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CataddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
