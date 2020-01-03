/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindStaffComponent } from './find-staff.component';

describe('FindStaffComponent', () => {
  let component: FindStaffComponent;
  let fixture: ComponentFixture<FindStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
