import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemanageComponent } from './rolemanage.component';

describe('RolemanageComponent', () => {
  let component: RolemanageComponent;
  let fixture: ComponentFixture<RolemanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolemanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
