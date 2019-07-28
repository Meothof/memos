import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoListPage } from './memo-list.page';

describe('MemoListPage', () => {
  let component: MemoListPage;
  let fixture: ComponentFixture<MemoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
