import { Component } from '@angular/core';
import { language, text } from 'src/app/shared/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {

  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  constructor(private localStorage: LocalStorageService) {}


}
