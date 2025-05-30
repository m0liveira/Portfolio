import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  openGithub(github: string) {
    github !== '' ? window.open(github, '_blank') : null;
  }

  goToProject(project: any) {
    console.log(project);

  }
}
