import { Component } from '@angular/core';
import { language, text } from '../../constant';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  constructor(private localStorage: LocalStorageService) {}
}
