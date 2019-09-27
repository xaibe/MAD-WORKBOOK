import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentslistPage } from './studentslist.page';

describe('StudentslistPage', () => {
  let component: StudentslistPage;
  let fixture: ComponentFixture<StudentslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
