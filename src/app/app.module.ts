import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Work', component: WorkComponent}
];
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    WorkComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
