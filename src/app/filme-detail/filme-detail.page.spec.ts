import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDetailPage } from './filme-detail.page';

describe('FilmeDetailPage', () => {
  let component: FilmeDetailPage;
  let fixture: ComponentFixture<FilmeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
