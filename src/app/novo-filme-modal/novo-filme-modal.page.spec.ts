import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFilmeModalPage } from './novo-filme-modal.page';

describe('NovoFilmeModalPage', () => {
  let component: NovoFilmeModalPage;
  let fixture: ComponentFixture<NovoFilmeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoFilmeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoFilmeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
