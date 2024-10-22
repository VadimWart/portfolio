import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-message-response',
  standalone: true,
  inputs: ['isMessageOut'],
  imports: [CommonModule, TranslateModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  public translate = inject(TranslateService);
  @Input() isMessageOut!: boolean; // Definiert den Input, den es erhält
}
