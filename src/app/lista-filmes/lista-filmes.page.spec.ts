import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmesPage } from './lista-filmes.page';

describe('ListaFilmesPage', () => {
  let component: ListaFilmesPage;
  let fixture: ComponentFixture<ListaFilmesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFilmesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFilmesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
