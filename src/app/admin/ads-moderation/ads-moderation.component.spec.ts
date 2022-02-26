import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsModerationComponent } from './ads-moderation.component';

describe('AdsModerationComponent', () => {
  let component: AdsModerationComponent;
  let fixture: ComponentFixture<AdsModerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsModerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
