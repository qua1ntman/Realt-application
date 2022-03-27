import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenAdPageComponent } from './chosen-ad-page.component';

describe('ChosenAdPageComponent', () => {
  let component: ChosenAdPageComponent;
  let fixture: ComponentFixture<ChosenAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenAdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
