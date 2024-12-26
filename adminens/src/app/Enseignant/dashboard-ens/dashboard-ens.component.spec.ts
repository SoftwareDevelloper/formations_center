import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardENSComponent } from './dashboard-ens.component';

describe('DashboardENSComponent', () => {
  let component: DashboardENSComponent;
  let fixture: ComponentFixture<DashboardENSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardENSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardENSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
