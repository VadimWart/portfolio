import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  ShowFooter: boolean = false;
  showPrivacyFooter: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkUrl();
  }

  checkUrl() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.ShowFooter = this.router.url === '/imprint';
        this.showPrivacyFooter = this.router.url === '/privacy';
      });
  }
}
