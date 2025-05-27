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
  projects: any[] = [
    {
      logo: '/assets/images/Cultured/culturedLogo.png',
      title: 'Cultured',
      description: 'A manga and manhwa tracking website designed to help users monitor their reading progress. The platform allows users to easily track chapters, update reading statuses, and manage their library of ongoing series.',
      descriptionShort: 'With a user-friendly interface and customizable lists, the website ensures an intuitive experience.',
      technologies: [
        { icon: '/assets/images/icons/figma.png', name: 'Figma' },
      ],
      thumbnail: '/assets/images/Cultured/deviceframesCultured.png',
      isDesign: true,
      github: '',
      githubUrl: ''
    }
  ]

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  openGithub(github: string) {
    github !== '' ? window.open(github, '_blank') : null;
  }
}
