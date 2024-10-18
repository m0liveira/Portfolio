import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  keyHolderVideo: any = { src: '/assets/images/KeyHolder/video.mp4', page: 'KeyHolder Demo' }

  keyHolderImgs: any[] = [
    { src: '/assets/images/KeyHolder/signUpPrev.png', page: 'Sign Up Page' },
    { src: '/assets/images/KeyHolder/signInPrev.png', page: 'Sign In Page' },
    { src: '/assets/images/KeyHolder/vaultPrev.png', page: 'Vault Page' },
    { src: '/assets/images/KeyHolder/newAccPrev.png', page: 'New Account Page' },
    { src: '/assets/images/KeyHolder/accPrev.png', page: 'Account Page' },
    { src: '/assets/images/KeyHolder/favPrev.png', page: 'Favorites Page' },
    { src: '/assets/images/KeyHolder/generatorPrev.png', page: 'Generator Page' },
    { src: '/assets/images/KeyHolder/settingsPrev.png', page: 'Settings Page' },
    { src: '/assets/images/KeyHolder/securityPrev.png', page: 'Security Page' },
    { src: '/assets/images/KeyHolder/profilePrev.png', page: 'Profile Page' },
  ];

  culturedImgs: any[] = [
    { src: '/assets/images/Cultured/libraryPrev.png', page: 'Library Page' },
    { src: '/assets/images/Cultured/mangaPrev.png', page: 'Manga Page' },
    { src: '/assets/images/Cultured/notificationsPrev.png', page: 'Notifications Page' },
    { src: '/assets/images/Cultured/searchPrev.png', page: 'Search Page' },
    { src: '/assets/images/Cultured/settingsPrev.png', page: 'Settings Page' },
  ];

  TABImgs: any[] = [
    { src: '/assets/images/TAB/apiCodePrev.png', page: 'API Code' },
    { src: '/assets/images/TAB/apiCode2Prev.png', page: 'API Code' },
    { src: '/assets/images/TAB/postmanPrev.png', page: 'Postman API Call' },
    { src: '/assets/images/TAB/sitePrev.png', page: 'Website' },
    { src: '/assets/images/TAB/pdfPrev.png', page: 'Generated PDF' },
  ];

  isPlayingVideo: boolean = false;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    switch (this.projectService.project.title) {
      case 'KeyHolder':
        this.projectService.project.images = this.keyHolderImgs;
        this.projectService.project.date = 2024;
        this.projectService.project.collaborators = ['Mateus Oliveira'];
        this.projectService.project.website = 'unavailable';
        this.projectService.project.webURL = '';
        this.projectService.project.isLaptop = false;
        this.projectService.project.hasPhoneDemo = true;
        break;

      case 'Cultured':
        this.projectService.project.images = this.culturedImgs;
        this.projectService.project.date = 2022;
        this.projectService.project.collaborators = ['Mateus Oliveira'];
        this.projectService.project.website = 'open in figma';
        this.projectService.project.webURL = 'https://www.figma.com/design/l2K2NmdPsmyDwJR0qGgWJ9/cultured?node-id=0-1&t=ZW0YNo6Nz1y7vx0K-1';
        this.projectService.project.isLaptop = true;
        this.projectService.project.hasPhoneDemo = false;
        break;

      case 'Telephone Address Book':
        this.projectService.project.images = this.TABImgs;
        this.projectService.project.date = 2024;
        this.projectService.project.collaborators = ['Mateus Oliveira'];
        this.projectService.project.website = 'unavailable';
        this.projectService.project.webURL = '';
        this.projectService.project.isLaptop = true;
        this.projectService.project.hasPhoneDemo = false;
        break;

      default:
        break;
    }
  }
  openURL(url: string) {
    url !== '' && url !== 'unavailable' ? window.open(url, '_blank') : null;
  }

  playVideo(video: HTMLVideoElement) {
    this.isPlayingVideo ? video.pause() : video.play();

    this.isPlayingVideo = !this.isPlayingVideo
  }
}
