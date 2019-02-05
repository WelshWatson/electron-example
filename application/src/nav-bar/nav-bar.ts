import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable value;
  showMenu = false;
  style = 'cursor: pointer;';

  valueChanged(newValue, oldValue) {

  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

