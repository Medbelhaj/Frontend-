import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceRoleComponent } from './choice-role.component';

describe('ChoiceRoleComponent', () => {
  let component: ChoiceRoleComponent;
  let fixture: ComponentFixture<ChoiceRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
