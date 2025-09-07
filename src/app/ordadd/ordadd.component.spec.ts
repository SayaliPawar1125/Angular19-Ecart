import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdaddComponent } from './ordadd.component';

describe('OrdaddComponent', () => {
  let component: OrdaddComponent;
  let fixture: ComponentFixture<OrdaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
