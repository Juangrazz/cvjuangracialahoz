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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalDescriptionComponent, 
    NavbarComponent, EducationComponent, ExperienceComponent
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
