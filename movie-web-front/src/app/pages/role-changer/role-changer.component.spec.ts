import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleChangerComponent } from './role-changer.component';

describe('RoleChangerComponent', () => {
  let component: RoleChangerComponent;
  let fixture: ComponentFixture<RoleChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
