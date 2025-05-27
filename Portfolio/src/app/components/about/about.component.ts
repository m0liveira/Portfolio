import { Component } from '@angular/core';
import { NavigationComponent } from "../shared/navigation/navigation.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
