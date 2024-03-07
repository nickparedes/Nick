import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkillSetComponent } from './card-skill-set.component';

describe('CardSkillSetComponent', () => {
  let component: CardSkillSetComponent;
  let fixture: ComponentFixture<CardSkillSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSkillSetComponent]
    });
    fixture = TestBed.createComponent(CardSkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
