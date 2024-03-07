import { Component } from '@angular/core';
import { language, text } from 'src/app/shared/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  constructor(private localStorage: LocalStorageService) {}

}
