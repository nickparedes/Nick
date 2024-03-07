import { Component, Input } from '@angular/core';
import { CardProject } from '../../models/interfaces';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  @Input() project?: CardProject;
}
