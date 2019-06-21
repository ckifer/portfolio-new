import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material.module';
import { FirebaseModule } from '../modules/firebase.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { AppRoutingModule } from '../modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    SplashComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
