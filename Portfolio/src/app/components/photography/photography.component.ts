import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { Photo, PhotographyService } from '../../services/photography.service';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, FooterComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})


export class PhotographyComponent {
  sizePool: string[] = ['', 'frame-xsmall', 'frame-small', 'frame-medium', 'frame-xsmall', 'frame-xsmall', 'frame-small', 'frame-xsmall', 'frame-medium'];
  latest: (Photo & { size?: string })[] = [];
  collection: (Photo & { size?: string })[] = [];

  leftColumn: Photo[] = [];
  centerColumn: Photo[] = [];
  rightColumn: Photo[] = [];

  isFullViewOpen = false;

  constructor(public photographyService: PhotographyService) { }

  divideIntoColumns(length: number, columNumber: number): number[] {
    let base = Math.floor(length / columNumber);
    let remainder = length % columNumber;

    let columns = [base, base, base];

    for (let i = 0; i < remainder; i++) {
      columns[i]++;
    }

    return columns;
  }

  async ngOnInit(): Promise<void> {
    let mediaQuery = window.matchMedia('(max-width: 600px)');

    if (mediaQuery.matches) {
      let columnSizes = this.divideIntoColumns(this.photographyService.showcase.length, 1);

      this.leftColumn = this.photographyService.showcase.slice(0, columnSizes[0]);

      this.latest = this.photographyService.getRandomPhotos(1, this.photographyService.latest);
      this.collection = this.photographyService.getRandomPhotos(1, this.photographyService.collection);

    } else {
      let columnSizes = this.divideIntoColumns(this.photographyService.showcase.length, 3);

      this.leftColumn = this.photographyService.showcase.slice(0, columnSizes[0]);
      this.centerColumn = this.photographyService.showcase.slice(columnSizes[0], columnSizes[0] + columnSizes[1]);
      this.rightColumn = this.photographyService.showcase.slice(columnSizes[0] + columnSizes[1]);

      this.latest = this.photographyService.getRandomPhotos(9, this.photographyService.latest);
      this.collection = this.photographyService.getRandomPhotos(9, this.photographyService.collection);


      this.latest.forEach((photo, index) => {
        photo.size = this.sizePool[index];
      });

      this.collection.forEach((photo, index) => {
        photo.size = this.sizePool[index];
      });
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
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
      carousel.scrollBy({ left: -400, behavior: 'smooth' });
    }
  }

  scrollRight(carousel: HTMLElement) {
    if (carousel) {
      carousel.scrollBy({ left: 400, behavior: 'smooth' });
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
