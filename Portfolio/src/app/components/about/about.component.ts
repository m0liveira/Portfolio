import { Component } from '@angular/core';
import { NavigationComponent } from "../shared/navigation/navigation.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
