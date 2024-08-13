import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueSummaryComponent } from './revenue-summary.component';

describe('RevenueSummaryComponent', () => {
  let component: RevenueSummaryComponent;
  let fixture: ComponentFixture<RevenueSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevenueSummaryComponent]
    });
    fixture = TestBed.createComponent(RevenueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
