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
import { IcebreakersComponent } from './components/icebreakers/icebreakers.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MyProjectsComponent,
    IcebreakersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    BackendComponent,
    FrontendComponent,
    AboutComponent,
    ContactMeComponent
  ]
})
export class MainModule { }
