import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadoresPage } from './patrocinadores.page';

describe('PatrocinadoresPage', () => {
  let component: PatrocinadoresPage;
  let fixture: ComponentFixture<PatrocinadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
