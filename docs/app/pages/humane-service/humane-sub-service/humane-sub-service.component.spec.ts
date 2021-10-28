import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumaneSubServiceComponent } from './humane-sub-service.component';

describe('HumaneSubServiceComponent', () => {
  let component: HumaneSubServiceComponent;
  let fixture: ComponentFixture<HumaneSubServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumaneSubServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumaneSubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
