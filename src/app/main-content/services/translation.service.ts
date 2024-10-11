import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['en', 'de']);

    this.translate.use('en');
  }

  public switchLanguage(language: string) {
    console.log('Switching language to:', language);
    this.translate.use(language);
  }
}
