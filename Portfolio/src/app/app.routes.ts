import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: HomeComponent },
  { path: 'Project/:title', component: ProjectComponent },
  { path: '**', redirectTo: '' },
];
