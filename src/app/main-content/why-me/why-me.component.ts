import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {
  @Input() isDesktop!: boolean;
  public translate = inject(TranslateService);
}
