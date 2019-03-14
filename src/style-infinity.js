import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/infinity';
import '@polymer/iron-meta/iron-meta.js';

class StyleInfinity extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="infinity">
        #infinity{
            display: none;
        }
      </style>
      <div class="infinity" id="infinity">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>

      <iron-meta id="metainfinity" key="infinity"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metainfinity.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.infinity;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-infinity', StyleInfinity);