import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../spinner-element';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox.js';

class IndexDemo extends PolymerElement {
  static get properties() {
    return {
      tipo2: {
        type: String,
        value: '',
        notify: true,
        observer: '_tipoChanged'
      }
    }
  }

  static get template() {
    return html`
      <style is="custom-style" include="demo-pages-shared-styles">
        #spinner { 
        --background-color-spinner: #96cae481;
        position: absolute;
        margin-left: 270px;
        margin-top: -390px;
        }
        #combo{
          margin-right: 400px;
        }
      </style>
        
        <paper-listbox id="combo">
          <paper-item>bars</paper-item>
          <paper-item>bounce</paper-item>
          <paper-item>bubbles</paper-item>
          <paper-item>circle</paper-item>
          <paper-item>cube</paper-item>
          <paper-item>default</paper-item>
          <paper-item>dots</paper-item>
          <paper-item>folding</paper-item>
          <paper-item>infinity</paper-item>
          <paper-item>ripple</paper-item>
        </paper-listbox>

        <spinner-element id="spinner" visible tipo="[[tipo2]]"></spinner-element>
        `;
  }
  ready() {
    super.ready();
    this.$.combo.addEventListener('iron-activate', (e) => this.select2(e));
  }
  select2(e) {
    var spin = this.$.spinner;
    if (spin.visible) {
      spin.visible = false;
    }
    var tt = e.detail.item.innerText;
    this.tipo2 = tt;
  }
  _tipoChanged() {
    var spin = this.$.spinner;
    if (!spin.visible) {
      spin.visible = true;
    }
  }
}
customElements.define('index-demo', IndexDemo);