import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Num1Component } from './num1.component';

describe('Num1Component', () => {
  let component: Num1Component;
  let fixture: ComponentFixture<Num1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Num1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Num1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
