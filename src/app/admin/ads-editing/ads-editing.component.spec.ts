import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsEditingComponent } from './ads-editing.component';

describe('AdsEditingComponent', () => {
  let component: AdsEditingComponent;
  let fixture: ComponentFixture<AdsEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
