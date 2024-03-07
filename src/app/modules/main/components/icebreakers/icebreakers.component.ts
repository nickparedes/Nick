import { Component } from '@angular/core';
import { language, text } from 'src/app/shared/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-icebreakers',
  templateUrl: './icebreakers.component.html',
  styleUrls: ['./icebreakers.component.scss']
})
export class IcebreakersComponent {
  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  constructor(private localStorage: LocalStorageService) {}
}
