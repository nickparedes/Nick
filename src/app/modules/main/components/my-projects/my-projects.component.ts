import { Component } from '@angular/core';
import { language, links, text } from 'src/app/shared/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;
  links = links
  constructor(private localStorage: LocalStorageService) {}
}
