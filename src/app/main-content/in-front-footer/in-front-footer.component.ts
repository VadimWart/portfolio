import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-in-front-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './in-front-footer.component.html',
  styleUrl: './in-front-footer.component.scss',
})
export class InFrontFooterComponent {}
