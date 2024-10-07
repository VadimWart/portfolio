import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { FirstPageComponent } from './first-page/first-page.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SkillsComponent,
    ContactComponent,
    MyWorkComponent,
    WhyMeComponent,
    FirstPageComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
