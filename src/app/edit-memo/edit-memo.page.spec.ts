import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemoPage } from './edit-memo.page';

describe('EditMemoPage', () => {
  let component: EditMemoPage;
  let fixture: ComponentFixture<EditMemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
