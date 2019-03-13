/* 
* ## Description.
* 
* varied set of spinners, you can choose any of the 9 types and additional you can edit the color, the time of activity and visibility.
* 
* Use `visible` to show the spinner:
* 
* ```html
* <spinner-element visible></spinner-element>
* ```
* 
* ## Polymer Element to display a spinner
* 
* the polymer element shows a spinner, which we can select any of the 9 types, (default, bars, bubble, circle, ripple, dots, folding, cube, bounce) but the type of spinner is specified, it will show the type 'default ', to activate it requires the' visible 'property
* 
* optionally we can set the activity time in milliseconds, if it is not set by default it is infinite
* 
* ```html
* <spinner-element 
*     visible 
*     tipo="bars"
*     duration="3000"
* ></spinner-element>
* ```
* 
* ## Styling
* The following custom properties are available for styling
* 
* Custom property | Description | Default
* ----------------|-------------|---------
* --background-color-spinner | The spinner-element background-color | #b9b5b524
* 
*   * @customElement
*   * @polymer
*   * @demo demo/index.html
 */

import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-meta/iron-meta.js';
import './src/style-bubbles';
import './src/style-bars';
import './src/style-circles';
import './src/style-dots';
import './src/style-bounce';
import './src/style-cube';
import './src/style-folding';
import './src/style-default';
import './src/style-ripple';


class SpinnerElement extends PolymerElement {
  static get template() {
    return html`
    
    <iron-meta id="elmeta" ></iron-meta>
    
    <style-bubbles id="bubbles"> </style-bubbles>
    <style-bars id="bars"> </style-bars>
    <style-dots id="dots"> </style-dots>
    <style-bounce id="bounce"> </style-bounce>
    <style-cube id="cube"> </style-cube>
    <style-ripple id="ripple"> </style-ripple>
    <style-default id="default"> </style-default>
    <style-folding id="folding"> </style-folding>
    <style-circles id="circles"></style-circles>

    `;
  }
  static get properties() {
    return {

      /**
     * select any of the 9 types (default, bars, bubble, circle, 
     * ripple, points, fold, cube, bounce) by default 'default'
     * @type {String}
     */
      tipo: { type: String, value: '', reflectToAttribute: true, notify: true, observer: '__tipoChanged' },
      /**
      * visibility of the spinner, by default 'false'
      * @type {Boolean}
      */
      visible: { type: Boolean, value: false, notify: true, reflectToAttribute: true, observer: '__visibleChanged' },
      /**
      * The spinner-element background-color, default '#b9b5b524'
      * @type {String}
      */
      color: { type: String },
      /**
      * activity time (milliseconds) of the spinner
      * @type {Number}
      */
      duration: { type: Number, reflectToAttribute: true, },
      /**
      * object used by iron-meta to access the selected spinner
      * @type {Object}
      */
      spinner: Object,
    };
  }

  __tipoChanged(e) {
    if (e) {
      this.tipo = e;
    } else {
      this.tipo = 'default';
    }
  }

  __visibleChanged(e) {
    this.__tipoChanged(this.tipo)
    this.spinner = this.$.elmeta.byKey(this.tipo);
    if (e) {
      this.spinner.visible = true;
      if (this.duration) {
        setTimeout(() => {
          this.spinner.visible = false;
        }, this.duration);
      }
    } else {
      this.spinner.visible = false;
    }
  }
}

window.customElements.define('spinner-element', SpinnerElement);
