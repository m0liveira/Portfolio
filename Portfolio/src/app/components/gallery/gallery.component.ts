import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { PhotographyService } from '../../services/photography.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FooterComponent, NavigationComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  constructor(public photoService: PhotographyService) { }
}
