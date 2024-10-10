import { Component } from '@angular/core';
import { IconService } from '../services/icon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-mobile.component.html',
  styleUrl: './skills-mobile.component.scss',
})
export class SkillsMobileComponent {
  icons: any[] = [];

  constructor(private iconService: IconService) {}
  ngOnInit(): void {
    this.icons = this.iconService.getJson();
  }
}
