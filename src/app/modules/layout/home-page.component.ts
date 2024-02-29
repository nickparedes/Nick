import { Component, OnInit } from '@angular/core';
import { theme } from 'src/app/shared/constant';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
    constructor(private localStorage: LocalStorageService) {}


    ngOnInit(): void {
        this.localStorage.setLocalStorage('theme', theme.light);
    }
}
