import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-in-front-footer-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './in-front-footer-mobile.component.html',
  styleUrl: './in-front-footer-mobile.component.scss',
})
export class InFrontFooterMobileComponent {
  isHovered = false;

  @HostListener('mouseover')
  onMouseOver() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }
}
