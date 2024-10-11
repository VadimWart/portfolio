import { Component, inject } from '@angular/core';
import { IconService } from '../services/icon.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills-mobile.component.html',
  styleUrl: './skills-mobile.component.scss',
})
export class SkillsMobileComponent {
  icons: any[] = [];
  public translate = inject(TranslateService);

  constructor(private iconService: IconService) {}
  ngOnInit(): void {
    this.icons = this.iconService.getJson();
  }
}
