import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialServicesPageComponent } from './financial-services-page.component';

describe('FinancialServicesPageComponent', () => {
  let component: FinancialServicesPageComponent;
  let fixture: ComponentFixture<FinancialServicesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialServicesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
