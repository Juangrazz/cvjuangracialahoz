import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherInterestsComponent } from './another-interests.component';

describe('AnotherInterestsComponent', () => {
  let component: AnotherInterestsComponent;
  let fixture: ComponentFixture<AnotherInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
