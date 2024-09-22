import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffesAdminComponent } from './offes-admin.component';

describe('OffesAdminComponent', () => {
  let component: OffesAdminComponent;
  let fixture: ComponentFixture<OffesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
