import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWorkExperienceComponent } from './card-work-experience.component';

describe('CardWorkExperienceComponent', () => {
  let component: CardWorkExperienceComponent;
  let fixture: ComponentFixture<CardWorkExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardWorkExperienceComponent]
    });
    fixture = TestBed.createComponent(CardWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
