import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarautPage } from './buscaraut.page';

describe('BuscarautPage', () => {
  let component: BuscarautPage;
  let fixture: ComponentFixture<BuscarautPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarautPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarautPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
