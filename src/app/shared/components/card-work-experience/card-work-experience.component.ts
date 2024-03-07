import { Component, Input, OnInit } from '@angular/core';
import { CardWorkExperience } from '../../models/interfaces';

@Component({
  selector: 'app-card-work-experience',
  templateUrl: './card-work-experience.component.html',
  styleUrls: ['./card-work-experience.component.scss']
})
export class CardWorkExperienceComponent implements OnInit {
  @Input() workExperience?: CardWorkExperience;

  constructor() { }

  ngOnInit(): void {
      
  }
}
