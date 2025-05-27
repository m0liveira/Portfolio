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
  projects: any[] = [
    {
      logo: '/assets/images/KeyHolder/KeyHolderLogo.png',
      title: 'KeyHolder',
      description: 'A secure password management app for private use, designed to securely store and manage users credentials, also allowing them to generate passwords, export and import credentials into their account.',
      descriptionShort: 'The app ensures cross-platform compatibility focusing on user security and convenience.',
      technologies: [
        { icon: '/assets/images/icons/ionic.png', name: 'Ionic' },
        { icon: '/assets/images/icons/angular.png', name: 'Angular' },
        { icon: '/assets/images/icons/firebase.png', name: 'Firebase' }
      ],
      thumbnail: '/assets/images/KeyHolder/deviceframesKeyholder.png',
      isDesign: false,
      github: 'This github repository is private.',
      githubUrl: ''
    },
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
    },
    {
      logo: '/assets/images/TAB/telephone.png',
      title: 'Telephone Address Book',
      description: 'An address and phone directory website built with Angular, designed to help users store and search for personal or business contact information. The platform allows users to easily manage a comprehensive list of addresses, phone numbers, and other contact details with an intuitive interface.',
      descriptionShort: 'Powered by a C# API, the site ensures fast and reliable data storage and retrieval.',
      technologies: [
        { icon: '/assets/images/icons/angular.png', name: 'Angular' },
        { icon: '/assets/images/icons/cSharp.png', name: 'C#' }
      ],
      thumbnail: '/assets/images/TAB/deviceframesPhonebook.png',
      isDesign: false,
      github: 'Github',
      githubUrl: 'https://github.com/m0liveira/telephone-address-book'
    },
  ]

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  openGithub(github: string) {
    github !== '' ? window.open(github, '_blank') : null;
  }
}
