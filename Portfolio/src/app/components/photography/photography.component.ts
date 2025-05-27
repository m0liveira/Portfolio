import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { PhotographyService } from '../../services/photography.service';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.scss'
})

export class PhotographyComponent {
  photos: { src: string, alt: string, size?: string }[] = [
    {
      src: 'https://images.unsplash.com/photo-1531632584752-b8f7bda3799d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 1',
      size: ''
    },
    {
      src: 'https://images.unsplash.com/photo-1529426645011-1457d2e7b052?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 1',
      size: 'frame-xsmall'
    },
    {
      src: 'https://images.unsplash.com/photo-1522897048979-e407743f3603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDB8MHwwfHx8MA%3D%3D',
      alt: 'Image 1',
      size: 'frame-small'
    },
    {
      src: 'https://images.unsplash.com/photo-1628803184377-c5167a0cb6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
      alt: 'Image 1',
      size: 'frame-medium'
    },
    {
      src: 'https://images.unsplash.com/photo-1620259570543-31964aa22586?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Image 1',
      size: 'frame-xsmall'
    },
    {
      src: 'https://images.unsplash.com/photo-1651754425516-9b5bdee63a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHwyfDB8fHww',
      alt: 'Image 1',
      size: 'frame-xsmall'
    },
    {
      src: 'https://images.unsplash.com/photo-1621844179813-fdb5897058ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHwyfDB8fHww',
      alt: 'Image 1',
      size: 'frame-small'
    },
    {
      src: 'https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldCUyMHBob3RvZ3JhcGh5fGVufDB8MHwwfHx8MA%3D%3Dæ',
      alt: 'Image 1',
      size: 'frame-xsmall'
    },
    {
      src: 'https://images.unsplash.com/photo-1429292394373-ddbcc6bb7468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MHwxfDB8fHww',
      alt: 'Image 1',
      size: 'frame-medium'
    },
  ];

  row1: { src: string, alt: string, size?: string }[] = this.photos.slice(0, 3);
  row2: { src: string, alt: string, size?: string }[] = this.photos.slice(3, 6);
  row3: { src: string, alt: string, size?: string }[] = this.photos.slice(6, 9);

  isFullViewOpen = false;

  constructor(public photographyService: PhotographyService) { }

  ngOnInit(): void {
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

  openFullView(fullView: HTMLElement, photo: { src: string, alt: string }) {
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

    if (!target.classList.contains('full-view') && !target.classList.contains('close-full-view') && !target.classList.contains('close')) return;

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
}
