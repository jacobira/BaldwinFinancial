import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBoxComponent } from './contact-box.component';

describe('ContactBoxComponent', () => {
  let component: ContactBoxComponent;
  let fixture: ComponentFixture<ContactBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
