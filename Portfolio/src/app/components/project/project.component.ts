import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProjectService } from '../../services/project.service';
import { NavigationComponent } from "../shared/navigation/navigation.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, NavigationComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  returnTo: string = '';
  constructor(private router: Router, public projectService: ProjectService) { }

  ngOnInit() {
    let urlSegments = this.router.url.split('/');
    this.returnTo = `/${urlSegments[1]}`;

    if (this.projectService.selectedProject && Object.keys(this.projectService.selectedProject).length === 0) {
      switch (urlSegments[1]) {
        case 'Home':
          this.projectService.selectedProject = this.projectService.devProjects.filter(project => project.title === urlSegments[urlSegments.length - 1])[0];

          if (!this.projectService.selectedProject) { this.router.navigateByUrl('/'); }
          break;

        case 'Design':
          this.projectService.selectedProject = this.projectService.designProjects.filter(project => project.title === urlSegments[urlSegments.length - 1])[0];

          if (!this.projectService.selectedProject) { this.router.navigateByUrl('/Design'); }
          break;
      }
    }

    window.scrollTo(0, 0);
  }

  openURL(url: string) {
    url !== '' && url !== 'unavailable' ? window.open(url, '_blank') : null;
  }

  // playVideo(video: HTMLVideoElement) {
  //   this.isPlayingVideo ? video.pause() : video.play();

  //   this.isPlayingVideo = !this.isPlayingVideo
  // }
}
