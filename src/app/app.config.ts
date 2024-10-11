import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {
  HttpClientModule,
  HttpClient,
  provideHttpClient,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en', // Setze hier die Standardsprache auf 'de'
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
