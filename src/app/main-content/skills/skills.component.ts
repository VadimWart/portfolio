import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IconService } from '../services/icon.service';
import { ScrollService } from '../services/scroll-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  icons: any[] = [];
  iconsStartFive: any[] = [];

  public translate = inject(TranslateService);

  constructor(
    private iconService: IconService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.icons = this.iconService.getJson();
  }

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }
}
