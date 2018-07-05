import './main.scss';
import template from './main.html';

import { InfoPanel } from './components/info-panel/info-panel';
import { Map } from './components/map/map';

/** Main UI Controller Class */
class ViewController {
  /** Initialize Application */
  constructor () {
    document.getElementById('app').outerHTML = template;
    this.initializeComponents();
  }

    /** Initialize Components with data and event listeners */
    initializeComponents () {
      // Initialize Info Panel
      this.infoComponent = new InfoPanel('info-panel-placeholder');
      this.mapComponent = new Map('map-placeholder');
    }
}

window.ctrl = new ViewController();
