import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestElement1Component } from './test-element1.component';

describe('TestElement1Component', () => {
  let component: TestElement1Component;
  let fixture: ComponentFixture<TestElement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestElement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestElement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
