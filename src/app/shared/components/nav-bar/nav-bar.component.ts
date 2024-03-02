import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menuItem = [
    { name: 'Home', path: ['/home'], id: "home" , active: true},
    { name: 'About', path: ['/about'], id: "about", active: false},
    { name: 'Backend', path: ['/backend'], id: "backend" , active: false},
    { name: 'Frontend', path: ['/frontend'], id: "frontend", active: false},
    { name: 'Contact me', path:['/contact'], id: "contact-me",  active: false},
  ]


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
