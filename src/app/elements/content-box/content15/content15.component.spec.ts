import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content15Component } from './content15.component';

describe('Content15Component', () => {
  let component: Content15Component;
  let fixture: ComponentFixture<Content15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
