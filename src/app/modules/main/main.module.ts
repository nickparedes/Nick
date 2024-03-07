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
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';

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
    HomeComponent,
    WorkExperienceComponent,
    SkillsetComponent,
    MyProjectsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  exports: [
    BackendComponent,
    FrontendComponent,
    AboutComponent,
    ContactMeComponent
  ]
})
export class MainModule { }
