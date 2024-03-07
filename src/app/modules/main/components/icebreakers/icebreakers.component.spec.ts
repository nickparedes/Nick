import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcebreakersComponent } from './icebreakers.component';

describe('IcebreakersComponent', () => {
  let component: IcebreakersComponent;
  let fixture: ComponentFixture<IcebreakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcebreakersComponent]
    });
    fixture = TestBed.createComponent(IcebreakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
