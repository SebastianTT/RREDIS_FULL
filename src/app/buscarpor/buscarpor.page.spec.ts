import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporPage } from './buscarpor.page';

describe('BuscarporPage', () => {
  let component: BuscarporPage;
  let fixture: ComponentFixture<BuscarporPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarporPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarporPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
