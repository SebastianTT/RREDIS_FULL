import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarporproPage } from './buscarporpro.page';

describe('BuscarporproPage', () => {
  let component: BuscarporproPage;
  let fixture: ComponentFixture<BuscarporproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarporproPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarporproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
