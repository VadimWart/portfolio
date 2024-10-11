import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent {
  @Input() scrollToSection!: () => void;
  @Input() scrollContainer!: string;
  @Input() isDesktop!: boolean;

  public translate = inject(TranslateService);
  public translationService = inject(TranslationService);

  constructor(private scrollService: ScrollService) {}

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }
}
