import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscariesPage } from './buscaries.page';

describe('BuscariesPage', () => {
  let component: BuscariesPage;
  let fixture: ComponentFixture<BuscariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscariesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
