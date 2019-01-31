import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailPage } from './dog-detail.page';

describe('DogDetailPage', () => {
  let component: DogDetailPage;
  let fixture: ComponentFixture<DogDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
