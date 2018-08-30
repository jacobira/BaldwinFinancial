import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmaClassPageComponent } from './cma-class-page.component';

describe('CmaClassPageComponent', () => {
  let component: CmaClassPageComponent;
  let fixture: ComponentFixture<CmaClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmaClassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmaClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
