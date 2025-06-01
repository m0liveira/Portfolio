import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
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
  filteredCities: string[] = [];
  datesArray: string[] = [];
  filteredDates: string[] = [];
  availableCities: string[] = [];
  availableDates: string[] = [];
  columnsNumber = 3;
  expandLocation = true;
  expandDate = true;
  isFullViewOpen = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public photographyService: PhotographyService) { }

  divideIntoColumns(length: number, columNumber: number): number[] {
    let base = Math.floor(length / columNumber);
    let remainder = length % columNumber;

    let columns = Array(columNumber).fill(base);

    for (let i = 0; i < remainder; i++) {
      columns[i]++;
    }

    return columns;
  }

  photosToDisplay(array: Photo[]): any {
    let groupedPhotos = this.photographyService.groupPhotosByDate(array);

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
    let urlSegments = this.router.url.split('/');

    this.photographyService.galleryTitle = urlSegments[urlSegments.length - 1] == 'Latest'
      ? `${urlSegments[urlSegments.length - 1]} Photos`
      : `Photo ${urlSegments[urlSegments.length - 1]}`;

    window.scrollTo({ top: 0, behavior: 'instant' });

    switch (this.photographyService.galleryTitle) {
      case 'Photo Collection':
        this.photosArray = this.photosToDisplay(this.photographyService.collection);
        this.citiesArray = this.photographyService.getUniqueValues(this.photographyService.collection, 'city');
        this.datesArray = this.photographyService.getUniqueValues(this.photographyService.collection, 'date');
        this.filteredPhotos = this.photographyService.collection;
        break;

      default:
        this.photosArray = this.photosToDisplay(this.photographyService.latest);
        this.citiesArray = this.photographyService.getUniqueValues(this.photographyService.latest, 'city');
        this.datesArray = this.photographyService.getUniqueValues(this.photographyService.latest, 'date');
        this.filteredPhotos = this.photographyService.latest;
        break;
    }

    this.display = this.photosArray;
  }
  clearFilters() {
    let checkboxes = document.querySelectorAll('.filter-checkbox');
    checkboxes.forEach((checkbox: Element) => {
      (checkbox as HTMLInputElement).checked = false;
    });

    this.filteredCities = [];
    this.filteredDates = [];
    this.filteredPhotos = [];
    this.display = this.photosArray;

    const allPhotos: Photo[] = [];
    for (const group of this.photosArray) {
      for (const column of group.photos) {
        allPhotos.push(...column);
      }
    }

    this.availableCities = Array.from(new Set(allPhotos.map(p => p.city))).filter((city): city is string => city !== undefined);
    this.availableDates = Array.from(new Set(allPhotos.map(p => p.date))).filter((date): date is string => date !== undefined);

    this.updateAvailableFilters();
  }

  updateAvailableFilters() {
    let matchedPhotos: Photo[] = [];

    for (const group of this.photosArray) {
      let date = group.date;
      for (const column of group.photos) {
        for (const photo of column) {
          let cityMatches = this.filteredCities.length === 0 || this.filteredCities.includes(photo.city);
          let dateMatches = this.filteredDates.length === 0 || this.filteredDates.includes(photo.date);

          if (cityMatches && dateMatches) {
            matchedPhotos.push(photo);
          }
        }
      }
    }

    let validCities = new Set(matchedPhotos.map(p => p.city));
    let validDates = new Set(matchedPhotos.map(p => p.date));

    this.filteredCities = this.filteredCities.filter(city => validCities.has(city));
    this.filteredDates = this.filteredDates.filter(date => validDates.has(date));

    this.availableCities = Array.from(validCities).filter((city): city is string => city !== undefined);
    this.availableDates = Array.from(validDates).filter((date): date is string => date !== undefined);
  }

  getFilteredCities(city: string) {
    if (this.filteredCities.includes(city)) {
      this.filteredCities = this.filteredCities.filter(c => c !== city);
    } else {
      this.filteredCities.push(city);
    }

    this.updateAvailableFilters();
    this.applyFilters();
  }

  getFilteredDates(date: string) {
    if (this.filteredDates.includes(date)) {
      this.filteredDates = this.filteredDates.filter(d => d !== date);
    } else {
      this.filteredDates.push(date);
    }

    this.updateAvailableFilters();
    this.applyFilters();
  }

  applyFilters() {
    let filteredPhotos: Photo[] = [];

    for (const group of this.photosArray) {
      let matchesDate = this.filteredDates.length === 0 || this.filteredDates.includes(group.date);
      if (!matchesDate) continue;

      for (const column of group.photos) {
        for (const photo of column) {
          if (
            (this.filteredCities.length === 0 || this.filteredCities.includes(photo.city)) &&
            (this.filteredDates.length === 0 || this.filteredDates.includes(photo.date))
          ) {
            filteredPhotos.push(photo);
          }
        }
      }
    }

    this.filteredPhotos = filteredPhotos;

    this.display = this.photosToDisplay(filteredPhotos);
  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflow = '';
  }

  ngAfterViewInit() {
    const carousel = document.querySelector('.items-carousel') as HTMLElement;
    if (!carousel) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      startX = ('touches' in e ? e.touches[0].pageX : e.pageX) - carousel.offsetLeft;
      scrollStart = carousel.scrollLeft;
      carousel.classList.add('dragging');
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const x = ('touches' in e ? e.touches[0].pageX : e.pageX) - carousel.offsetLeft;
      const walk = (x - startX) * 1.1; // adjust multiplier for smoother/slower scroll
      carousel.scrollLeft = scrollStart - walk;
    };

    const stopDragging = () => {
      isDragging = false;
      carousel.classList.remove('dragging');
    };

    // Desktop
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDragging);

    // Touch
    carousel.addEventListener('touchstart', handleMouseDown);
    carousel.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', stopDragging);
  }

  openFullView(fullView: HTMLElement, photo: Photo) {
    this.photographyService.setSelectedPhoto(photo);
    this.isFullViewOpen = true;

    if (fullView) {
      fullView.classList.remove('hide');
      fullView.classList.remove('fadeOut');
      void fullView.offsetWidth;
      fullView.classList.add('fadeIn');
      this.disableScroll();
    }
  }

  closeFullView(event: MouseEvent, fullView: HTMLElement) {
    let target = event.target as HTMLElement;

    if (!target.classList.contains('full-view') && !target.classList.contains('close-full-view') && !target.classList.contains('close') && !target.classList.contains('close-h1') && !target.classList.contains('close-container')) return;

    if (fullView) {
      fullView.classList.remove('fadeIn');
      void fullView.offsetWidth;
      fullView.classList.add('fadeOut');
      this.enableScroll();

      setTimeout(() => {
        this.isFullViewOpen = false;
        this.photographyService.setSelectedPhoto(null);
        fullView.classList.add('hide');
      }, 300);
    }
  }

  scrollLeft(carousel: HTMLElement) {
    if (carousel) {
      carousel.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight(carousel: HTMLElement) {
    if (carousel) {
      carousel.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }

  downloadImage(url: string | undefined) {
    if (!url) return;

    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = this.getFilename(url);
        a.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(() => {
        window.open(url, '_blank');
      });
  }

  getFilename(url: string): string {
    return url.split('/').pop()?.split('?')[0] || 'download.jpg';
  }
}
