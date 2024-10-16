import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  projects: any[] = [
    {
      logo: '/assets/images/KeyHolderLogo.png',
      title: 'KeyHolder',
      description: 'A secure password management app for private use, designed to securely store and manage users credentials, also allowing them to generate passwords, export and import credentials into their account.',
      descriptionShort: 'The app ensures cross-platform compatibility focusing on user security and convenience.',
      technologies: [
        { icon: '/assets/images/ionic.png', name: 'Ionic' },
        { icon: '/assets/images/angular.png', name: 'Angular' },
        { icon: '/assets/images/firebase.png', name: 'Firebase' }
      ],
      thumbnail: '/assets/images/deviceframesKeyholder.png'
    },
    {
      logo: '/assets/images/KeyHolderLogo.png',
      title: 'KeyHolder',
      description: 'A secure password management app for private use, designed to securely store and manage users credentials, also allowing them to generate passwords, export and import credentials into their account.',
      descriptionShort: 'The app ensures cross-platform compatibility focusing on user security and convenience.',
      technologies: [
        { icon: '/assets/images/ionic.png', name: 'Ionic' },
        { icon: '/assets/images/angular.png', name: 'Angular' },
        { icon: '/assets/images/firebase.png', name: 'Firebase' }
      ],
      thumbnail: '/assets/images/deviceframesKeyholder.png'
    },
  ]
}
