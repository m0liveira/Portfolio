import { Component } from '@angular/core';
import { NavigationComponent } from "../shared/navigation/navigation.component";

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
