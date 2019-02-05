import { PLATFORM } from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';
  
export class App {
  router: Router;
  style: string;

  constructor() {
    this.style = 'top: 25px;'
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('./home/home-page') },
      { route: ['about'],          name: 'about',      moduleId: PLATFORM.moduleName('./about/about') },
      { route: ['parent'],         name: 'parent',     moduleId: PLATFORM.moduleName('./parent-page/parent')},
      { route: ['child'],          name: 'child',      moduleId: PLATFORM.moduleName('./child-page/child')}
    ]);
  }
}


