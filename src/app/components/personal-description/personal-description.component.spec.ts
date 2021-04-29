import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDescriptionComponent } from './personal-description.component';

describe('PersonalDescriptionComponent', () => {
  let component: PersonalDescriptionComponent;
  let fixture: ComponentFixture<PersonalDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
