import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../shared/footer/footer.component";
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { Photo, PhotographyService } from '../../services/photography.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, NavigationComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  display: any = [];
  photosArray: any = [];
  filteredPhotos: Photo[] = [];
  citiesArray: string[] = [];
  datesArray: string[] = [];
  filteredCities: string[] = [];
  filteredDates: string[] = [];
  columnsNumber = 3;

  constructor(public photoService: PhotographyService) { }

  divideIntoColumns(length: number, columNumber: number): number[] {
    let base = Math.floor(length / columNumber);
    let remainder = length % columNumber;

    let columns = [base, base, base];

    for (let i = 0; i < remainder; i++) {
      columns[i]++;
    }

    return columns;
  }

  photosToDisplay(array: Photo[]): any {
    let groupedPhotos = this.photoService.groupPhotosByDate(array);

    let result = groupedPhotos.map(group => {
      let divided: Photo[][] = [];

      let columnSizes = this.divideIntoColumns(group.photos.length, this.columnsNumber);
      let photos = [...group.photos];

      for (let size of columnSizes) {
        divided.push(photos.splice(0, size));
      }

      return {
        date: group.date,
        photos: divided
      };
    });

    return result;
  }

  ngOnInit() {
    let columnSizes;

    switch (this.photoService.galleryTitle) {
      case 'Photo Collection':
        this.photosArray = this.photosToDisplay(this.photoService.collection);
        this.citiesArray = this.photoService.getUniqueValues(this.photoService.collection, 'city');
        this.datesArray = this.photoService.getUniqueValues(this.photoService.collection, 'date');
        break;

      default:
        this.photosArray = this.photosToDisplay(this.photoService.latest);
        this.citiesArray = this.photoService.getUniqueValues(this.photoService.latest, 'city');
        this.datesArray = this.photoService.getUniqueValues(this.photoService.latest, 'date');
        break;
    }

    this.display = this.photosArray;
  }
}
