import {  Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { language, text } from '../../constant';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  @ViewChild('navBar') navBar! : ElementRef;

  text  = 'english' === this.localStorage.getLocalStorage(language.default) ? text.english : text.spanish ;
  menuItem = this.text.navBarComponent.menuItem ;
  isMenuVisible : boolean = false;

  viewPortWidth! : number;

  constructor(private localStorage: LocalStorageService, private renderer2:Renderer2) {
    
  }

  ngOnInit(): void {

      this.viewPortWidth = window.innerWidth;
      console.log(this.viewPortWidth)
      if(this.viewPortWidth < 640){
        this.isMenuVisible = false;
      }
  }

  toggleMenu() {
    this.isMenuVisible  = !this.isMenuVisible ;
  }

  closeNavbar(){
    this.isMenuVisible = false;
  }


  @HostListener('window: resize', ['$event'])
  onResize(event: Event){
    this.viewPortWidth  = window.innerWidth;
    if(this.viewPortWidth > 640){
      this.isMenuVisible = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event){
    let x = 0;
    console.log(window.pageYOffset)
    if(this.viewPortWidth > 640){
      console.log(x)
      x = 88;
    }else{
      x = 55;
    }
     if(window.pageYOffset > x){
       this.renderer2.addClass(this.navBar.nativeElement, 'bg-base-color')
     }else{
        this.renderer2.removeClass(this.navBar.nativeElement, 'bg-base-color')
     }
  }
  
}
