import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPPage } from './tipo-p.page';

describe('TipoPPage', () => {
  let component: TipoPPage;
  let fixture: ComponentFixture<TipoPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
