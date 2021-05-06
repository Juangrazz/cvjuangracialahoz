import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    NgxSmoothScrollModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
