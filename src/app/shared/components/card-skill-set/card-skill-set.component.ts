import { Component, Input } from '@angular/core';
import { CardSkillSet } from '../../models/interfaces';

@Component({
  selector: 'app-card-skill-set',
  templateUrl: './card-skill-set.component.html',
  styleUrls: ['./card-skill-set.component.scss']
})
export class CardSkillSetComponent {
  @Input() skills?: CardSkillSet;
  
}
