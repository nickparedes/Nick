import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { language, text } from '../../constant';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;

  

  menuItem = this.text.navBarComponent.menuItem ;


  constructor(private localStorage: LocalStorageService, private router: Router) {}

  
  menuActive(item: any){
    //this.router.navigate(item.path);
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId.toString());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
}
