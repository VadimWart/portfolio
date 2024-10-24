import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
