import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { DesignComponent } from './components/design/design.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent },
  { path: 'Design', component: DesignComponent },
  { path: 'Photography', component: PhotographyComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Project/:title', component: ProjectComponent },
  { path: '**', redirectTo: '' },
];
