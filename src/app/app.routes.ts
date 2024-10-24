import { Routes } from '@angular/router';
import { MainComponent } from './main-content/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './main-content/privacy-policy/privacy-policy.component';
import { FirstPageComponent } from './main-content/first-page/first-page.component';
import { WhyMeComponent } from './main-content/why-me/why-me.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
];
