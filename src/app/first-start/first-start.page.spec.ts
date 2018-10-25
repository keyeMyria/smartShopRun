import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStartPage } from './first-start.page';

describe('FirstStartPage', () => {
  let component: FirstStartPage;
  let fixture: ComponentFixture<FirstStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
