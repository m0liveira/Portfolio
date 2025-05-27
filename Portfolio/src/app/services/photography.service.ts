import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotographyService {
  selectedPhoto: { src: string, alt: string } | null = {
    src: 'https://images.unsplash.com/photo-1531632584752-b8f7bda3799d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 1',
  };

  constructor() { }

  setSelectedPhoto(photo: { src: string, alt: string } | null) {
    this.selectedPhoto = photo;
  }
}
