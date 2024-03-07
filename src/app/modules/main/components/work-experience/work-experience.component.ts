import { Component } from '@angular/core';
import { language, text } from 'src/app/shared/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  constructor(private localStorage: LocalStorageService) {}
}
