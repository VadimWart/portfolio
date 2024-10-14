import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WorkItem, WorkService } from '../services/work.service';

@Component({
  selector: 'app-my-work-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work-mobile.component.html',
  styleUrl: './my-work-mobile.component.scss',
})
export class MyWorkMobileComponent {
  @Input() animationMobile!: boolean;
  isListOpen: boolean[] = [false, false];
  public translate = inject(TranslateService);
  myWork: WorkItem[] = [];

  constructor(private workService: WorkService) {}

  toggleList(index: number) {
    this.isListOpen[index] = !this.isListOpen[index];
  }

  ngOnInit(): void {
    this.myWork = this.workService.getJson();
  }

  getClass(index: number) {
    return this.animationMobile ? `animate${index}` : 'animateBack';
  }
}
