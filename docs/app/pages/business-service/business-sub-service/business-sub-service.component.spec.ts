import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSubServiceComponent } from './business-sub-service.component';

describe('BusinessSubServiceComponent', () => {
  let component: BusinessSubServiceComponent;
  let fixture: ComponentFixture<BusinessSubServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessSubServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessSubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
