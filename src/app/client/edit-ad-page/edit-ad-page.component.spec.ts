import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdPageComponent } from './edit-ad-page.component';

describe('EditAdPageComponent', () => {
  let component: EditAdPageComponent;
  let fixture: ComponentFixture<EditAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAdPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
