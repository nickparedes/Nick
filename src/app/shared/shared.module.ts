import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardWorkExperienceComponent } from './components/card-work-experience/card-work-experience.component';
import { CardSkillSetComponent } from './components/card-skill-set/card-skill-set.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CardWorkExperienceComponent,
    CardSkillSetComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    CardWorkExperienceComponent
  ],
})
export class SharedModule { }
