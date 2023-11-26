import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeElementComponent } from './fee-element.component';

describe('FeeElementComponent', () => {
  let component: FeeElementComponent;
  let fixture: ComponentFixture<FeeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
