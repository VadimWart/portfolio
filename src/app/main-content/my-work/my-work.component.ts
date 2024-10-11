import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../services/scroll.service';
import { WorkItem, WorkService } from '../services/work.service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  myWork: WorkItem[] = [];
  @Input() animationOne!: boolean;

  public translate = inject(TranslateService);

  constructor(
    private workService: WorkService,
    private scrollService: ScrollService
  ) {}

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getClass(index: number) {
    return this.animationOne ? `animate${index}` : 'animateBack';
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
  }

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }
}
