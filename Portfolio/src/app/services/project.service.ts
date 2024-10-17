import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: any = {
    logo: '/assets/images/KeyHolderLogo.png',
    title: 'KeyHolder',
    description: 'A secure password management app for private use, designed to securely store and manage users credentials, also allowing them to generate passwords, export and import credentials into their account.',
    descriptionShort: 'The app ensures cross-platform compatibility focusing on user security and convenience.',
    technologies: [
      { icon: '/assets/images/ionic.png', name: 'Ionic' },
      { icon: '/assets/images/angular.png', name: 'Angular' },
      { icon: '/assets/images/firebase.png', name: 'Firebase' }
    ],
    images: ['/assets/images/deviceframesKeyholder.png',],
    isDesign: false,
    figmaUrl: '',
    github: 'This github repository is private.',
    githubUrl: ''
  }


  constructor() { }
}
