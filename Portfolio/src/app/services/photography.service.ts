import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {
  selectedPhoto: { src: string, alt: string } | null = null;

  constructor() { }

  setSelectedPhoto(photo: { src: string, alt: string } | null) {
    this.selectedPhoto = photo;
  }
}
