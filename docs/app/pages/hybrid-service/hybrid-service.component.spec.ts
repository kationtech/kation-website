import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridServiceComponent } from './hybrid-service.component';

describe('HybridServiceComponent', () => {
  let component: HybridServiceComponent;
  let fixture: ComponentFixture<HybridServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
