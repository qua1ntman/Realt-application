import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAdPageComponent } from './create-new-ad-page.component';

describe('CreateNewAdPageComponent', () => {
  let component: CreateNewAdPageComponent;
  let fixture: ComponentFixture<CreateNewAdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewAdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
