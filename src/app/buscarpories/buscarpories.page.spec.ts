import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporiesPage } from './buscarpories.page';

describe('BuscarporiesPage', () => {
  let component: BuscarporiesPage;
  let fixture: ComponentFixture<BuscarporiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarporiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarporiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
