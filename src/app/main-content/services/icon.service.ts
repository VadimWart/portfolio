import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  public icons = [
    { path: './assets/img/angular.png' },
    { path: './assets/img/typescript.png' },
    { path: './assets/img/javascript.png' },
    { path: './assets/img/html.png' },
    { path: './assets/img/css.png' },
    { path: './assets/img/api.png' },
    { path: './assets/img/firebase.png' },
    { path: './assets/img/git.png' },
    { path: './assets/img/scrum.png' },
    { path: './assets/img/material_design.png' },
    {
      path: './assets/img/challange_me.png',
      challange:
        'I am always happy to learn new technologies,just tell me what you need',
    },
  ];

  constructor() {}
  getJson() {
    return this.icons;
  }
}
