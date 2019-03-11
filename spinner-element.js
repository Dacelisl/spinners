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
      visible: { type: Boolean, value: false, reflectToAttribute: true, observer: '__visibleChanged' },
      tipo: { type: String, value: 'default', reflectToAttribute: true, observer: '__tipoChanged' },
      color: { type: String, reflectToAttribute: true },
      duration: Number,
      spinner: Object,
    };
  }

  __tipoChanged(e) {
    this.tipo = e;
  }

  __visibleChanged(e) {
    try {
      this.spinner = this.$.elmeta.byKey(this.tipo);
      if (this.visible) {
        this.spinner.visible = true;
        if (this.duration) {
          setTimeout(() => {
            this.spinner.visible = false;
          }, this.duration);
        }
      }

    } catch (error) {
      console.log('no exist');
    }
  }
}

window.customElements.define('spinner-element', SpinnerElement);
