import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ScrollService } from '../services/scroll-service';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent {
  @Input() scrollToSection!: () => void;
  @Input() scrollContainer!: string;

  @Input() isDesktop!: boolean;
  constructor(private scrollService: ScrollService) {}

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }
}
