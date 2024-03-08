import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardWorkExperienceComponent } from './components/card-work-experience/card-work-experience.component';
import { CardSkillSetComponent } from './components/card-skill-set/card-skill-set.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    CardWorkExperienceComponent,
    CardSkillSetComponent,
    CarouselComponent,
    CardProjectComponent,
    TechnologiesComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    CardWorkExperienceComponent,
    CardSkillSetComponent,
    CarouselComponent,
    CardProjectComponent,
    TechnologiesComponent
  ],
})
export class SharedModule { }
