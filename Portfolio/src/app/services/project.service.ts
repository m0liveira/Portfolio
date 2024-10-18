import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: any = {
    logo: '',
    title: '',
    description: '',
    descriptionShort: '',
    technologies: [],
    isDesign: false,
    figmaUrl: '',
    github: '',
    githubUrl: '',
    images: [],
    date: 0,
    collaborators: [],
    website: '',
    webURL: '',
    isLaptop: false,
    hasPhoneDemo: false,
  }


  constructor() { }
}
