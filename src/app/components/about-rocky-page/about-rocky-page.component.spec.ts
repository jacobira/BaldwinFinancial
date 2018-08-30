import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRockyPageComponent } from './about-rocky-page.component';

describe('AboutRockyPageComponent', () => {
  let component: AboutRockyPageComponent;
  let fixture: ComponentFixture<AboutRockyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutRockyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutRockyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
