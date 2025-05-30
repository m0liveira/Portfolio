import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { DesignComponent } from './components/design/design.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent },
  { path: 'Home/Project/:title', component: ProjectComponent },
  { path: 'Design', component: DesignComponent },
  { path: 'Design/Project/:title', component: ProjectComponent },
  { path: 'Photography', component: PhotographyComponent },
  { path: 'Photography/:gallery', component: GalleryComponent },
  { path: 'About', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
