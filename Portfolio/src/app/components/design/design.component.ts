import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, FooterComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {
  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  openGithub(github: string) {
    github !== '' ? window.open(github, '_blank') : null;
  }
}
