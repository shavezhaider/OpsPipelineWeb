import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealReportListComponent } from './deal-report-list.component';

describe('DealReportListComponent', () => {
  let component: DealReportListComponent;
  let fixture: ComponentFixture<DealReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
