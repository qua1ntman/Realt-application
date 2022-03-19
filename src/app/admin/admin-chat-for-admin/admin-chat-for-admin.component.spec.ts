import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatForAdminComponent } from './admin-chat-for-admin.component';

describe('AdminChatForAdminComponent', () => {
  let component: AdminChatForAdminComponent;
  let fixture: ComponentFixture<AdminChatForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChatForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
