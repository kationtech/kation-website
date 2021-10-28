import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumaneServiceComponent } from './humane-service.component';

describe('HumaneServiceComponent', () => {
  let component: HumaneServiceComponent;
  let fixture: ComponentFixture<HumaneServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumaneServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumaneServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
