import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalDescriptionComponent } from './components/personal-description/personal-description.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ComputerSkillsComponent } from './components/computer-skills/computer-skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { CompetenciesComponent } from './components/competencies/competencies.component';
import { AnotherInterestsComponent } from './components/another-interests/another-interests.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalDescriptionComponent, 
    NavbarComponent, 
    EducationComponent, 
    ExperienceComponent, 
    ComputerSkillsComponent, 
    LanguagesComponent,
    CompetenciesComponent,
    AnotherInterestsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
