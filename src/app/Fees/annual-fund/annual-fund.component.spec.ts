import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualFundComponent } from './annual-fund.component';

describe('AnnualFundComponent', () => {
  let component: AnnualFundComponent;
  let fixture: ComponentFixture<AnnualFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
