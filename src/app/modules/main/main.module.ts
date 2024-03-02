import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BackendComponent } from './components/backend/backend.component';
import { ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}
@NgModule({
  declarations: [
    MainPageComponent,
    BackendComponent,
    FrontendComponent,
    AboutComponent,
    ContactMeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    BackendComponent,
    FrontendComponent,
    AboutComponent,
    ContactMeComponent
  ]
})
export class MainModule { }
