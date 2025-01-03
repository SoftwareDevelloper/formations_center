import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEnsComponent } from './header-ens.component';

describe('HeaderEnsComponent', () => {
  let component: HeaderEnsComponent;
  let fixture: ComponentFixture<HeaderEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEnsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
