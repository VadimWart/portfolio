import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent implements AfterViewInit {
  public translate = inject(TranslateService);
  @Input() isDesktop!: boolean;
  @ViewChild('refContainer') refContainer!: ElementRef;
  carousel = [
    './assets/img/carousel_1.png',
    './assets/img/carousel_2.png',
    './assets/img/carousel_3.png',
  ];
  currentCarousel = this.carousel[0];

  constructor(private scrollService: ScrollService) {}

  scrollToPosition(position: number) {
    let width = window.innerWidth;

    let calcPosition = position + width - 100;

    setTimeout(() => {
      this.scrollService.setScrollPosition(calcPosition);
    }, 0);
  }

  referencesTxt = [
    {
      name: 'Salmai Safi',
      proj: 'REFERENCES.TeamPartner',
      txt: 'REFERENCES.Salmai',
    },
    {
      name: 'Anna Fritz',
      proj: 'REFERENCES.TeamPartner',
      txt: 'REFERENCES.Anna',
    },
    {
      name: 'Fabian Roeseler',
      proj: 'REFERENCES.TeamPartner',
      txt: 'REFERENCES.Fabian',
    },
  ];

  ngAfterViewInit() {
    const container = this.refContainer.nativeElement;
    container.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(event: Event): void {
    const container = this.refContainer.nativeElement;
    const scrollLeft = container.scrollLeft;

    if (scrollLeft > 650) {
      this.currentCarousel = this.carousel[2];
    } else if (scrollLeft > 300) {
      this.currentCarousel = this.carousel[1];
    } else {
      this.currentCarousel = this.carousel[0];
    }
  }
}
